import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Alert} from 'react-native';

class ModificaTodo extends React.Component{
  static navigationOptions={
    title:"Modificar campos",
    headerStyle:{
      backgroundColor:"#09a4ae",
      
    }    
  };
  state = {
    veri:'',
    newcodigo: '',
    newnombre: '',
    newcarrera: '',
    newcentro: '',
    codigo: '',
    nombre: '',
    carrera: '',
    centro: '',
  };
  cambiaCodigo = inputText => {
    this.setState({ newcodigo: inputText });
  };
  cambiaNombre = inputText => {
    this.setState({ newnombre: inputText });
  };
  cambiaCarrera = inputText => {
    this.setState({ newcarrera: inputText });
  };
  cambiaCentro = inputText => {
    this.setState({ newcentro: inputText });
  };
  
  componentDidMount = () =>{
    var {params} = this.props.navigation.state;
    console.log(params);
    var arreglo = params.string.split(',');
    arreglo[0] = arreglo[0].trim();

           this.setState({
         veri: arreglo[0],
         codigo: arreglo[0],
         nombre: arreglo[1],
         carrera: arreglo[2],
         centro: arreglo[3],
         newcodigo: arreglo[0],
         newnombre: arreglo[1],
         newcarrera: arreglo[2],
         newcentro: arreglo[3],
       })
    console.log(arreglo)
}


  salva=()=>{
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  
  
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      console.log(xhttp.responseText)
       if(xhttp.responseText == "1"){
       Alert.alert(
         "Mensaje",
         "Se Modificó con éxito de la base de datos",
         [
           {text: 'ok', onPress:()=> this.navigation.navigate("Menu")},
         ],
         {cancelable: false}

       );
       }
       else
        Alert.alert("No se pudo modificar, vuelva a intentar")
    }
};
console.log("https://unshorn-flares.000webhostapp.com/modificar.php?codigo="+this.state.codigo+"&nombre="+this.state.nombre+"&carrera="+this.state.carrera+"&centro="+this.state.centro)
xhttp.open("GET", "https://unshorn-flares.000webhostapp.com/modificar.php?codigo="+this.state.codigo+"&nombre="+this.state.nombre+"&carrera="+this.state.carrera+"&centro="+this.state.centro, true);
xhttp.send();

  }


render(){
  return(
    <View>
      <Text style={styles.txtmenu}>Modificar datos </Text>

       
        <TextInput
          placeholder ={this.state.nombre}
          style={{height:40,width:200,borderColor:"#09a4ae",borderWidth:2,marginLeft:50,marginTop:10}}
          onChangeText={this.cambiaNombre}
        />    
        <TextInput
          placeholder = {this.state.carrera}
          style={{height:40,width:200,borderColor:"#09a4ae",borderWidth:2,marginLeft:50,marginTop:10}}
          onChangeText={this.cambiaCarrera}
        />       
        <TextInput
          placeholder = {this.state.centro}
          style={{height:40,width:200,borderColor:"#09a4ae",borderWidth:2,marginLeft:50,marginTop:10}}
          onChangeText={this.cambiaCentro}
        />             

      <View style={[{width:"90%",margin:10, backgroundColor:"#09a4ae",marginTop:10}]}>      
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

export default ModificaTodo;