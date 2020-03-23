import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Alert} from 'react-native';

class Cambios extends React.Component{
  static navigationOptions={
    title:"Altas campos",
    headerStyle:{
      backgroundColor:"red",
      
    }    
  };
  state={
    codigo:"",
    nombre:"",
    carrera:"",
    centro:"",
  };
  cambiaCodigo=(inputText) => {
    this.setState({codigo:inputText});
  }
  cambiaNombre=(inputText)=>{
    this.setState({nombre:inputText});
  }
  cambiaCarrera=(inputText)=>{
    this.setState({carrera:inputText});
  }
    cambiaCentro=(inputText)=>{
    this.setState({centro:inputText});
  }
  limpiar = ()=>{
    this.setState({codigo:'',nombre:'',carrera:'',centro:''});
  }
  salva=()=>{
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  
  
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       
       Alert.alert(
        'Alta exitosa',
        'Se agregó correctamente',
        [
          {text: 'Deshacer alta', onPress: () => this.props.navigation.navigate("Baja")},

          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      



       if(xhttp.responseText == "1"){
       Alert.alert(
         "Mensaje",
         "Se insertó con exito en la base de datos",
         [
           {text: 'ok', onPress:()=> alert('Yes Pressed')},
         ],
         {cancelable: false}

       );
       }
    }
};
xhttp.open("GET", "https://unshorn-flares.000webhostapp.com/altas.php?codigo="+this.state.codigo+"&nombre="+this.state.nombre+"&carrera="+this.state.carrera+"&centro="+this.state.centro, true);
xhttp.send();

  }


render(){
  return(
    <View>
      <Text style={styles.txtmenu}>Altas </Text>

       <TextInput
          placeholder ="Codigo"
          style={{height:40,width:200,borderColor:"red",borderWidth:2,marginLeft:50}}
          onChangeText={this.cambiaCodigo}
       />    
        <TextInput
          placeholder ="Nombre"
          style={{height:40,width:200,borderColor:"red",borderWidth:2,marginLeft:50,marginTop:10}}
          onChangeText={this.cambiaNombre}
        />    
        <TextInput
          placeholder ="Carrera"
          style={{height:40,width:200,borderColor:"red",borderWidth:2,marginLeft:50,marginTop:10}}
          onChangeText={this.cambiaCarrera}
        />       
        <TextInput
          placeholder ="Centro"
          style={{height:40,width:200,borderColor:"red",borderWidth:2,marginLeft:50,marginTop:10}}
          onChangeText={this.cambiaCentro}
        />             

      <View style={[{width:"90%",margin:10, backgroundColor:"red",marginTop:10}]}>      
        <Button
        title="Salvar"        
        onPress={this.salva}
        color="#FF"
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
  color: "#FAB6A6"

}
  
});

export default Cambios;