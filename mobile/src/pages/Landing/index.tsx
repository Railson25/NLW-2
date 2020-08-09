import React, { useState, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import api from '../../services/api'

import styles from './styles'
import { LandingImg, Study, Give, Heart } from '../../assets/index'

function Landing(){
    const { navigate } = useNavigation()
    const [ totalConnections, setTotalConnections ] = useState(0)

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data
            setTotalConnections(total)
        })
    }, [])
    
    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses')
    }

    function handleNavigateToStudyPages(){
        navigate('Study')
    }

    return(
        <View style={styles.container}>
            <Image source={LandingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja Bem Vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}>
                    <Image source={Study} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton >

                <RectButton 
                    onPress={handleNavigateToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}>
                    <Image source={Give} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton >
            </View>
            <Text style={styles.totalConnections}>
                total de {totalConnections} conexões ja realizadas {' '}
                <Image source={Heart} />
            </Text>
        </View>
    )
}

export default Landing