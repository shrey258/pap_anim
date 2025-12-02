import { StyleSheet, View } from "react-native";
import Animated from 'react-native-reanimated';

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.circle}> 
        <View style={styles.orbitingCircle}> 
          <View style={styles.child} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle:{
    height: 96,
    width: 96,
    borderRadius: 48,
    backgroundColor: '#21201C',
  },
  
  orbitingCircle: {
    width: 32,
    height: 32,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
    borderRadius: '50%',
    backgroundColor: '#FAD757',
  },
  
  child: {
    width: 16,
    height: 16,
    position: 'absolute',
    right: -8,
    top: -8,
    borderRadius: 50,
    backgroundColor: '#FFA500',
  },
});


