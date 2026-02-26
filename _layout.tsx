import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
	const [resultado, setResultado] = useState(0);
	const [numero, setNumero] = useState(1);
	function deffineNumero(x){
		toString(x)
		toString(numero)
		setNumero(x + '' + numero)
	}
	function somaNumero() {
		setResultado(resultado + numero)
		setNumero(null)
	}
	function divideNumero() {
		setResultado(resultado / numero)
	} 
	function subitraiNumero() {
		setResultado(resultado - numero)
	}
	function multiplocaNumero() {
		setResultado(resultado * numero)
	}

return (
		<View>
			<View>
				<Text style={styles.tela}>
					{resultado}
				</Text>
			</View>
			<View>
				<Text style={styles.tela}>
					{numero}
				</Text>
			</View>
			<View style={styles.divisoria}>
				<View style={styles.tela}>
					<TouchableOpacity style={styles.botao} onPress={() => {setResultado(0);}}>
						<Text>
							C
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => deffineNumero(1)}>
						<Text>
							1
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => {deffineNumero(2);}}>
						<Text>
							2
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => {deffineNumero(3);}}>
						<Text>
							3
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.tela}>
					<TouchableOpacity style={styles.botao} onPress={() => {deffineNumero(4);}}>
						<Text>
							4
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => {deffineNumero(5);}}>
						<Text>
							5
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => {deffineNumero(6);}}>
						<Text>
							6
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.tela}>
					<TouchableOpacity style={styles.botao} onPress={() => {deffineNumero(7);}}>
						<Text>
							7
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => {deffineNumero(8);}}>
						<Text>
							8
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => {deffineNumero(9);}}>
						<Text>
							9 
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.tela}>
					<TouchableOpacity style={styles.botao} onPress={somaNumero}>
						<Text>
							+
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={subitraiNumero}>
						<Text>
							-
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={divideNumero}>
						<Text>
							/
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={multiplocaNumero}>
						<Text>
							x
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	botao: {
		backgroundColor: 'pink',
		marginHorizontal: 100,
		marginVertical: 10,
		borderRadius: 20,
		padding: 10,
		alignSelf: 'center',
		color: 'lightgrey'
	},

	tela: {
		backgroundColor: 'lightgrey',
		marginHorizontal: 50,
		marginVertical: 10,
		borderRadius: 20,
		padding: 10,
		alignSelf: 'center',

	},

	divisoria: {
		flex: 1,
		justifyContent: "space-between",
		flexDirection: "row",
		margin: 10,
		marginTop: 20
	}

})
