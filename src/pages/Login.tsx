import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import FCC from '../assets/download.jpg';
import {logInOutline, personCircleOutline} from 'ionicons/icons';
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY='intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen,setIntroSeen] = useState(true);
    const [present,dismiss]=useIonLoading();


    useEffect(()=>{
        const checkStorage = async () => {
            const seen= await Preferences.get({key:INTRO_KEY});
            setIntroSeen(seen.value === 'true');
            
        }
        checkStorage();
    },[]);
    const doLogin =async (event:any) => {   
        event.preventDefault();
        await present('Logging in...');
        setTimeout(async () => {
            dismiss();
            router.push('/app', 'root');
        }, 2000);
    }
    const finishIntro = async () => {
     setIntroSeen(true);
     Preferences.set({ key: INTRO_KEY, value: 'true' });
        
    }
    const seeIntroAgain = async () => {
        setIntroSeen(false);   
        Preferences.remove({ key: INTRO_KEY });
    }

    return (
        <>
        {!introSeen ? (<Intro onFinish={finishIntro}/>):(
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle> Free Code Camp </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} className='ion-padding'>
                <IonGrid fixed>
                    <IonRow class='ion-justify-content-center'>
                        <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                        <div className='ion-text-center ion-padding'>
                <img src={FCC} alt='FCC Logo' width={'20%'} height={'10%'}/>
                </div>
                        </IonCol>
                    </IonRow>
                    <IonRow class='ion-justify-content-center'>
                    <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                    <IonCard>
                  <IonCardContent>
                    <form onSubmit={doLogin}>
                       <IonInput mode='md' label='Email' fill='outline' labelPlacement='floating' type='email' placeholder='duy@mai.com'></IonInput>
                       <IonInput mode='md' className='ion-margin-top' label='Password' fill='outline' labelPlacement='floating' type='password' placeholder='duy@mai.com'></IonInput>
                       <IonButton className='ion-margin-top'  expand='block' type='submit'>
                        Login
                        <IonIcon icon={logInOutline} slot='end'/>
                        </IonButton>
                        <IonButton color={'secondary'} className='ion-margin-top'  expand='block' type='button' routerLink='/register'>
                        Create account 
                        <IonIcon icon={personCircleOutline} slot='end'/>
                        </IonButton>
                        <IonButton onClick={seeIntroAgain} fill='clear' size='small' color={'medium'} className='ion-margin-top'  expand='block' type='button' >
                        Watch intro again
                        <IonIcon icon={personCircleOutline} slot='end'/>
                        </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
                        </IonCol>
                        </IonRow>
                </IonGrid>
             
             
            </IonContent>
    
        </IonPage>
        )}
        </>
    );
};

export default Login;