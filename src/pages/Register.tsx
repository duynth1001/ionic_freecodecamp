import { IonBackButton, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {

    const router = useIonRouter();

    const doRegister =(event:any) => {
        event.preventDefault(); 
        console.log('doRegister');
        router.goBack();
    }

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar color={'success'}>
                <IonButton slot='start'>
                    <IonBackButton defaultHref='/'/>
                </IonButton>
                <IonTitle> Create Account</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent scrollY={false}>
                 <IonGrid fixed>
                                 <IonRow class='ion-justify-content-center'>
                                     <IonCol size='12' sizeMd='8' sizeLg='6' sizeXl='4'>
                                     <IonCard>
              <IonCardContent>
                <form onSubmit={doRegister}>
                   <IonInput label='Email' fill='outline' labelPlacement='floating' type='email' placeholder='duy@mai.com'></IonInput>
                   <IonInput className='ion-margin-top' label='Password' fill='outline' labelPlacement='floating' type='password' placeholder='duy@mai.com'></IonInput>
                   <IonButton className='ion-margin-top'  expand='block' type='submit'>
                    Create my account
                    <IonIcon icon={checkmarkDoneOutline} slot='end'/>
                    </IonButton>
               
                    </form>
                </IonCardContent>
            </IonCard>
                                        </IonCol>
                                        </IonRow>
                                        </IonGrid>
        
        </IonContent>
    </IonPage>
    );
};

export default Register;