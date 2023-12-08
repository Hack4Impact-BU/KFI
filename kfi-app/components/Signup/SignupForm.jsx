import { StyleSheet, Text, TextInput, View, Pressable, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';
import { Image } from 'react-native';
import Logo from '../../assets/icon.png';

const ValidatedInput = ({ input, type, placeholder }) => {
    return (
        <TextInput placeholder={placeholder} type={type} />
    );

}


const SignupForm = ({ setUser }) => {
    // attempt to grab user state, if no state, redirect to login
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Image source={Logo} style={{width:50, height: 50}}/>

                <View style={styles.formContainer}>
                    <Text style={styles.title}>Sign Up</Text>

                    {/* <Text style={styles.label}>First Name</Text> */}
                    <TextInput style={styles.inputText}
                        placeholder="First Name"
                        value={form.firstName}
                        onChangeText={(value) => setForm({ ...form, firstName: value })}
                        onSubmitEditing={() => lastNameInput.focus()}
                        blurOnSubmit={false}
                    />

                    {/* <Text style={styles.label}>Last Name</Text> */}
                    <TextInput style={styles.inputText}
                        placeholder="Last Name"
                        value={form.lastName}
                        ref={(input) => lastNameInput = input}
                        onSubmitEditing={() => emailInput.focus()}
                        blurOnSubmit={false}
                        onChangeText={(value) => setForm({ ...form, lastName: value })}
                    />

                    {/* <Text style={styles.label}>Email</Text> */}
                    <TextInput style={styles.inputText}
                        placeholder="Email"
                        value={form.email}
                        blurOnSubmit={false}
                        onChangeText={(value) => setForm({ ...form, email: value })}

                        ref={(input) => emailInput = input}
                        onSubmitEditing={() => passwordInput.focus()}
                    />

                    <TextInput style={styles.inputText}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}

                        blurOnSubmit={false}
                        ref={(input) => passwordInput = input}
                    />



                    {/* <Text style={styles.label}></Text>
                    <TextInput style={styles.inputText}
                        placeholder="Last Name"
                    />

                    <Text style={styles.label}></Text>
                    <TextInput style={styles.inputText}
                        placeholder="Last Name"
                    /> */}
                    <Pressable 
                        style={({ pressed }) => [{ backgroundColor: pressed ? "white" : "black" }, styles.button ]} 
                        title="Sign Up"
                        onPress={() => console.log(form)}>
                        
                        {({ pressed }) => (
                            <Text style={[{ color: pressed ? 'black' : 'white' }, styles.button.text]}>
                                Sign Up
                            </Text>
                        )}
                    
                    </Pressable>
                </View>
                

                
            </View>
        </ TouchableWithoutFeedback >
    );

}


const styles = StyleSheet.create({
    container: {
      display: "flex",

      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'start',
      padding: 20,
      paddingLeft: 40,
        paddingRight: 40,
      width: '100%',
      height: '100%',
    },
    formContainer: {
        marginVertical: 20,
        display: "flex",
  
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
        height: '100%',
      },
    button: {
        text: {
            fontSize: 20,
        },
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal: 50,
        paddingVertical: 30,
        marginBottom: 20,
        width: "100%",
        borderRadius: 40,
        borderColor: "#000000",
        borderWidth: 2,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputText: {
        textAlign: "center",
        fontSize: 20,
        borderRadius: 40,
        width: "100%",
        height: 50,
        marginVertical: 5,
        padding: 5,
        borderWidth: 2,
        borderColor: "#000000"
    }
});

export default SignupForm;