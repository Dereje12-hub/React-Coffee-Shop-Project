import React, {useState} from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  Button,
  View,
  Image,
  TextInput,
} from 'react-native';


 //IDCPT is increment decrement count to parent
const IncDecReset = ({ IDCTP }) => {

  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
    //countToOrder.setOrderCount(counter);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
    //countToOrder.setOrdercount(counter);
  };
 
 
  return (
   
  <div className='flexbox-container'> 
       <h4>choose count </h4>
     <View style={styles.buttonStyle}>
        <Button
         title={"+"}
         style={styles.buttonStyle}
          onPress={increase}
          color="blue"
        />
     </View>
            
        <View > 
          <TextInput
            style={styles.input}
            placeholder=''
            value={counter}
         />

        </View>

     <View style={styles.buttonStyle}>
            <Button
              title={"-"}
              style={styles.buttonStyle}
              onPress={decrease}
            color="brown"
          />
           
       </View> 

        <View style={styles.buttonStyle}>
            <Button
              title={"Count"}
              onPress={()=>IDCTP(counter)}
            color="blue"
          />
           
       </View> 

       </div>   

  )
}

const styles = StyleSheet.create({
   backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
   right: 0
  },
 buttonStyle: {
    marginHorizontal: 20,
    marginTop: 5
  },
  messageBox: {
    maxHeight: 200,
    width: '80%',
    //borderRadius: 10,

},
  input: {
    width: 75,
    boarderColor: '#555',
    
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    //marginTop: 140,
    marginBottom: 10,
  
  }
 });


export default IncDecReset;

