import React, {useCallback} from 'react';
import {loadFull} from 'tsparticles';
import style from './practical.module.scss'
import Particles from 'react-tsparticles';
import react from '../../../assets/svg/react-2.svg'
import js from '../../../assets/svg/logo-javascript.svg'
import redux from '../../../assets/svg/redux.svg'
import ts from '../../../assets/svg/typescript-2.svg'

export const Practical = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any | undefined) => {
        await console.log(container)
    }, []);

    return (
        <div className={style.practical}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: -1,
                    },

                    fpsLimit: 50,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },

                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    'particles': {
                        'number': {
                            'value': 30,
                            'density': {
                                'enable': true,
                                'value_area': 800
                            }
                        },

                        'move': {
                            enable: true,
                            'speed': 0.1,
                            'out_mode': 'out'
                        },
                        'shape': {
                            'type': [
                                'image',

                            ],
                            'image': [
                                {
                                    'src': react,
                                    'height': 20,
                                    'width': 20,
                                },
                                {
                                    'src': ts,
                                    'height': 20,
                                    'width': 20,
                                },
                                {
                                    'src': js,
                                    'height': 20,
                                    'width': 20
                                },
                                {
                                    'src': redux,
                                    'height': 20,
                                    'width': 20,
                                }
                            ]
                        },
                        'color': {
                            'value': '#c7aeae'
                        },
                        'size': {
                            'value': 10,
                            'random': false,
                            'anim': {
                                'enable': true,
                                'speed': 2,
                                'size_min': 7,
                                'sync': true
                            }
                        }
                    },
                    'retina_detect': false,
                    detectRetina: true,
                }}
                canvasClassName={style.canvasPracticals}
            />
        </div>

    );
}