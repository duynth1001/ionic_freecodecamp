import { CreateAnimation, createGesture, Gesture, GestureDetail, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React, { useRef } from 'react';

const Tab2: React.FC = () => {

    const animationRef  = useRef<CreateAnimation|null>(null);

    const elementRef  = useRef<HTMLDivElement|null>(null);

    

    useIonViewDidEnter(()=>{
        animationRef.current?.animation.play();
        const gesture:Gesture=createGesture({
            el:elementRef.current!,
            threshold:0,
            gestureName:'my-gesture',
            onStart:(ev)=>onStartHandler(ev),
            onMove:(ev)=>onMoveHandler(ev),
            onEnd:(ev)=>onMoveEnd(ev)
        })
        gesture.enable();
    })

    const onStartHandler = (detail:GestureDetail)=>{
        elementRef.current!.style.transition='none';
    }

    const onMoveHandler = (detail:GestureDetail)=>{
        const x=detail.currentX-detail.startX;
        const y=detail.currentY-detail.startY;
        elementRef.current!.style.transform=`translate(${x}px,${y}px)`;
    }
    const onMoveEnd = (detail:GestureDetail)=>{
       elementRef.current!.style.transition=' 500ms ease-in';
       elementRef.current!.style.transform='translate(0,0)';
    }
    return (
        <IonPage>
            <IonHeader>
               <IonToolbar color={'success'}>
                                            <IonButton slot='start'>
                                        <IonMenuButton/>
                                            </IonButton>
                                                <IonTitle>Tab 2</IonTitle>
                                            </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding" scrollY={false}>
                <CreateAnimation
                ref={animationRef}
                duration={2000}
                iterations={Infinity}
                delay={1000}
                keyframes={
                    [
                        { offset: 0, transform: 'scale(1)', opacity: '1' },
                        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.5' },
                        { offset: 1, transform: 'scale(1)', opacity: '1' }
                    ]
                }
                >
                    <IonButton expand='block' color={'success'} className="ion-margin">
                        Join Ionic Academy
                        </IonButton>
                </CreateAnimation>
                <div ref={elementRef} style={{width:50,height:50,backgroundColor:'red'}}/>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;