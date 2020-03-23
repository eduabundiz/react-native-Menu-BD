import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Alert} from 'react-native';


class Modificar extends React.Component{
  static navigationOptions={
    title:"Modificar",
    headerStyle:{
      backgroundColor:"#09a4ae",
      
    }    
  };
  state={
    codigo:"",
  };
  
  cambiaCodigo=(inputText) => {
    this.setState({codigo:inputText});
  }  

  modificacion = () => {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        //this.setState({result: JSON.parse(xhttp.responseText)})
        console.log(xhttp.responseText)
        this.props.navigation.navigate("ModificaTodo",{string: xhttp.responseText})
      }
    }.bind(this)
     xhttp.open('GET',"https://unshorn-flares.000webhostapp.com/buscar.php?codigo="+this.state.codigo, true);
     console.log("https://unshorn-flares.000webhostapp.com/buscar.php?codigo="+this.state.codigo);
     xhttp.send()
  }
change= (array) =>{  
  this.props.navigation.navigate("ModificaTodo",{para:array})
}
render(){
  return(
    <View>
      <Text style={styles.txtmenu}>modificar por código</Text>

       <TextInput
          placeholder ="Codigo"
          style={{height:40,width:200,borderColor:"#09a4ae",borderWidth:2,marginLeft:50}}
          onChangeText={this.cambiaCodigo}
       />    

      <View style={[{width:"90%",margin:10, backgroundColor:"red",marginTop:10}]}>      
        <Button
        classname="Otro"
        title="Modificar Todo"
        onPress ={this.modificacion}
        
        color="black"
        
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

export default Modificar;