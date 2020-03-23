import React, {Component} from 'react';
import {View,Button,Textfield,Text,StyleSheet} from 'react-native';
import Dialog from "react-native-dialog";


class Menu extends React.Component{
    static navigationOptions={
    title:"Bienvenido",
    headerStyle:{
      backgroundColor:"#09a4ae",      
    }    
  };
  state = {
    dialogVisible: false,
    codigomod:''
  };
  codigomodifica=(inputText)=>{
    this.setState({codigomod:inputText});
  }
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
 
  handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ dialogVisible: false });
  };
consulta = () => {
     //this.setState({ dialogVisible: false });
  var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        //this.setState({result: JSON.parse(xhttp.responseText)})
        if(xhttp.responseText == "0")
          alert('No se encontró')
      }else {
        // this.setState({ dialogVisible: false });
        alert(xhttp.responseText)
        this.props.navigation.navigate("ModificaTodo",{ name: xhttp.responseText});
      }
    }.bind(this)
     xhttp.open('GET','https://unshorn-flares.000webhostapp.com/buscar.php?codigo='+this.state.codigomod, true);
     xhttp.send()
}
render(){
  return(
    <View>
      <Text style={styles.txtmenu}>Menu </Text>
              
      <View style={[{width:"90%",margin:10, backgroundColor:"red"}]}>
        <Button
        title="Altas"
        onPress={()=> this.props.navigation.navigate("Alta")}
        color="red"
        />
      </View>
       
      <View style={[{width:"90%",margin:10, backgroundColor:"red"}]}>
        <Button
        title="Eliminar"
        onPress={()=> this.props.navigation.navigate("Baja")}
        color="#1DE9B6"
        />
      </View>
      
      <View style={[{width:"90%",margin:10, backgroundColor:"red"}]}>     
        <Button
        title="Modificar"
        
        color="#09a4ae"
         onPress={()=> this.props.navigation.navigate("Modificar")}
        
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

export default Menu;