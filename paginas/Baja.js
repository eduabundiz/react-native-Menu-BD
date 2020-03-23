import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Alert} from 'react-native';

class Bajas extends React.Component{
  static navigationOptions={
    title:"Bajas campos",
    headerStyle:{
      backgroundColor:"#1DE9B6",
      
    }    
  };
  state={
    codigo:"",
  };
  cambiaCodigo=(inputText) => {
    this.setState({codigo:inputText});
  }  
  borra=()=>{
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  
  
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       



       if(xhttp.responseText == "1"){
       Alert.alert(
         "Mensaje",
         "Se borró con exito en la base de datos",
         [
           {text: 'ok' },
         ],
         {cancelable: false}

       );
       }
       else{
         Alert.alert(
           "No se borró",
           "No se encuentra el código en la base de datos",
           [
             {text:'ok',}
           ]
         )
       }
    }
};
xhttp.open("GET", "https://unshorn-flares.000webhostapp.com/eliminar.php?codigo="+this.state.codigo, true);
xhttp.send();

  }


render(){
  return(
    <View>
      <Text style={styles.txtmenu}>Bajas </Text>

       <TextInput
          placeholder ="Codigo"
          style={{height:40,width:200,borderColor:"#1DE9B6",borderWidth:2,marginLeft:50}}
          onChangeText={this.cambiaCodigo}
       />    

      <View style={[{width:"90%",margin:10, backgroundColor:"red",marginTop:10}]}>      
        <Button
        title="Borrar"        
        onPress={this.borra}
        color="#1DE9B6"
        />
      </View>


    </View>
  );
}
}
const styles = StyleSheet.create({
txtmenu:{
  fontSize:30,
  textAlign:"center",
  color: "#000"

}
  
});

export default Bajas;