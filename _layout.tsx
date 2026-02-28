import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
	const [resultado, setResultado] = useState(0);
	const [numero, setNumero] = useState(0);
	const [operacao, setOperacao] = useState(0);
	const [aguardaNumero, setAguardaNumero] = useState(true);
	const [telaFake, setTelaFake] = useState("")

	function escolheOperacao(x) {
		if (!resultado && numero !== null) {
			setResultado(parseInt(numero));
			setNumero(null)
		}
		realisaOperacao(x)
		setOperacao(x)
		setAguardaNumero(true)
		if ((telaFake.slice(-1) == "+" || telaFake.slice(-1) == "-" || telaFake.slice(-1) == "/" || telaFake.slice(-1) == "x")) {

			if (x == 1) {
				setTelaFake(telaFake.slice(0, -1) + "+")
			} else if (x == 2) {
				setTelaFake(telaFake.slice(0, -1) + "-")
			} else if (x == 3) {
				setTelaFake(telaFake.slice(0, -1) + "/")
			} else if (x == 4) {
				setTelaFake(telaFake.slice(0, -1) + "x")
			}
		} else {
			if (x == 1) {
				setTelaFake(telaFake + "+")
			} else if (x == 2) {
				setTelaFake(telaFake + "-")
			} else if (x == 3) {
				setTelaFake(telaFake + "/")
			} else if (x == 4) {
				setTelaFake(telaFake + "x")
			}
		}
	}
	function botaoIgual(){
		realisaOperacao(operacao)
		setTelaFake('')
/* 		setTelaFake(resultado) esta dando erro de puxar a versão antiga da varaivel resultado invez da nova são sei pq 
 */		
	}
	function realisaOperacao(operacao) {
		switch (operacao) {
			case 1:
				somaNumero()
				setOperacao('')
				setAguardaNumero(false)
				break;
			case 2:
				subitraiNumero()
				setOperacao('')
				setAguardaNumero(false)

				break;
			case 3:
				divideNumero()
				setOperacao('')
				setAguardaNumero(false)
				break;
			case 4:
				multiplocaNumero()
				setOperacao('')
				setAguardaNumero(false)
				break;
		}
	}
	function deffineNumero(x) {
		if (!numero && aguardaNumero == true) {
			setNumero(parseInt(x));
			setTelaFake(telaFake + x.toString()) 
		} else if (aguardaNumero == true) {
			setNumero(parseInt(numero.toString() + x.toString()));
			setTelaFake(telaFake + x.toString())
		}
	}
	function somaNumero() {
		setResultado(resultado + numero)
		setNumero(null)
	}
	function divideNumero() {
		setResultado(resultado / numero)
		setNumero(null)
	}
	function subitraiNumero() {
		setResultado(resultado - numero)
		setNumero(null)
	}
	function multiplocaNumero() {
		setResultado(resultado * numero)
		setNumero(null)
	}

	return (
		<View style={styles.corpo}>
			<View>
				<Text style={styles.tela}>
					{resultado}
				</Text>
			</View>
			{/* <View>
				<Text style={styles.tela}>
					{operacao}
				</Text>
			</View>
			<View>
				<Text style={styles.tela}>
					{numero}
				</Text>
			</View> */}
			<View>
				<Text style={styles.tela}>
					{telaFake}
				</Text>
			</View>
			<View style={styles.divisoria}>
				<View>
					<TouchableOpacity style={styles.botao} onPress={() => { setResultado(0); }}>
						<Text>
							C
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => deffineNumero(0)}>
						<Text>
							0
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => deffineNumero(1)}>
						<Text>
							1
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { deffineNumero(2); }}>
						<Text>
							2
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={styles.botao} onPress={() => { deffineNumero(3); }}>
						<Text>
							3
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { deffineNumero(4); }}>
						<Text>
							4
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { deffineNumero(5); }}>
						<Text>
							5
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { deffineNumero(6); }}>
						<Text>
							6
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={styles.botao} onPress={() => { deffineNumero(7); }}>
						<Text>
							7
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { deffineNumero(8); }}>
						<Text>
							8
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { deffineNumero(9); }}>
						<Text>
							9
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={botaoIgual}>
						<Text>
							=
						</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={styles.botao} onPress={() => { escolheOperacao(1); }}>
						<Text>
							+
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { escolheOperacao(2); }}>
						<Text>
							-
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { escolheOperacao(3); }}>
						<Text>
							/
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.botao} onPress={() => { escolheOperacao(4); }}>
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
		marginHorizontal: 20,
		marginVertical: 10,
		borderRadius: 50,
		padding: 20,
		alignSelf: 'center',
		color: 'lightgrey'
	},

	tela: {
		backgroundColor: 'grey',
		color: 'white',
		marginHorizontal: 0,
		marginVertical: 10,
		borderRadius: 20,
		padding: 10,
		alignSelf: 'center',

	},

	corpo: {
		backgroundColor: 'lightgrey',
		marginHorizontal: 0,
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
