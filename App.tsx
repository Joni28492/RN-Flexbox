import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { DimenionesScreen } from './src/screens/DimenionesScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';

export const App = () => {
  return (
    // <SafeAreaView style={{ height: 400, width: 300 }}>
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#28425B'
    }}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimenionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>

  )
}

