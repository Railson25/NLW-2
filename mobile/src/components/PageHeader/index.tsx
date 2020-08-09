import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Back, Logo } from '../../assets'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps {
    title: string,
    headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {

    const { navigate } = useNavigation()

    function handleGoBack(){
        navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack} >
                    <Image source={Back} resizeMode="contain"/>
                </BorderlessButton>
                <Image source={Logo} resizeMode="contain" />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {headerRight}
            </View >   
            {children}
        </View>
    )
}

export default PageHeader