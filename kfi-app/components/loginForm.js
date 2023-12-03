import { StyleSheet, Text, TextInput, View } from 'react-native';

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <Text style={styles.label}>First Name</Text>
            <TextInput style={styles.inputText}
                placeholder="First Name"
            />

            <Text style={styles.label}>Last Name</Text>
            <TextInput style={styles.inputText}
                placeholder="Last Name"
            />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.inputText}
                placeholder="Email"
            />

            <Text style={styles.label}></Text>
            <TextInput style={styles.inputText}
                placeholder="Last Name"
            />

            <Text style={styles.label}></Text>
            <TextInput style={styles.inputText}
                placeholder="Last Name"
            />


        </View>
    );
    


}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});