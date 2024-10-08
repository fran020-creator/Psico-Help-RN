const express= require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto")
const nodemailer = require ("nodemailer")

const app = express();
const port = 8000;
const cors = require ("cors")
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const jwt = require("jsonwebtoken")

//  CONEXAO COM O BANCO DE DADOS
mongoose.connect("mongodb+srv://adm:adm@cluster0.qbpvh.mongodb.net/",{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("connectado ao banco de dados")
}).catch((err)=>{
    console.log("error ao conectar ao mongo db",err);
});


app.listen(port,()=>{
    console.log("o servidor esta rodando na porta 8000")
})

//endpoint to register in the app
const User = require("./models/user")
const Agendamento = require("./models/agendamento")
//function to send verification email to the user
//const sendVerificationEmail = async(email,verificationToken=>{const transporter = nodemailer.createTransport({service:"gmail"auth:{user:"meu email",pass:não pode ter verificação de duas etapas}})})
app.post("/register", async (req, res) => {
    try {
        const { name,idade, email, password,celular} = req.body;

        console.log("Dados recebidos:", req.body);

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email já cadastrado" });
        }

        // Create a new user
        const newUser = new User({ name, idade, email, password, celular });

        // Generate the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "Usuário registrado com sucesso!" });

    } catch (error) {
        console.log("Error registering user:", error);
        res.status(500).json({ message: "Registro falhou", error: error.message });
    }
});
const generateSecretKey=()=>{
    const secretKey=crypto.randomBytes(32).toString("hex")
    return secretKey;
}
const secretKey=generateSecretKey();
//endpoint to login the user

app.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;

        //check if the user exists
        const user= await User.findOne({email});
        if (!user){
            return res.status(401).json({message:"email invalido ou senha"})
        }
        //check if the passsword is correct

        if (user.password!==password){
            return res.status(401).json({message:"invalid password"});


        }

        //generate a token
        const token = jwt.sign({ userId: user._id }, secretKey);

        // Retorne o token e o e-mail do usuário
        res.status(200).json({
            token,
            email: user.email // Adicione o e-mail à resposta
        });
    } catch (error) {
        res.status(500).json({message:"login failed"})
    }
});

//endpoint to scheduling the user

app.post("/agendamento", async (req, res) => {
    try {
        const { data, hora, emailUsuario } = req.body;

        console.log("Dados recebidos:", req.body);

        // Verifique se os dados necessários foram enviados
        if (!data || !hora || !emailUsuario) {
            return res.status(400).json({ message: "Dados ausentes." });
        }

        // Verifique se a hora já está agendada
        const existingHora = await Agendamento.findOne({ hora });
        if (existingHora) {
            return res.status(400).json({ message: "Hora já agendada" });
        }

        // Crie um novo agendamento
        const newAgendamento = new Agendamento({ data, hora, emailUsuario });

        // Salve o agendamento no banco de dados
        await newAgendamento.save();

        res.status(201).json({ message: "Agendamento registrado com sucesso!" });

    } catch (error) {
        console.log("Erro ao registrar agendamento:", error); // Log de erro
        res.status(500).json({ message: "Registro falhou", error: error.message });
    }
});

app.get("/agendamentos", async (req, res) => {
    try {
        const agendamentos = await Agendamento.find(); // Busca todos os agendamentos
        res.status(200).json(agendamentos);
    } catch (error) {
        console.error("Erro ao buscar agendamentos:", error);
        res.status(500).json({ message: "Erro ao buscar agendamentos" });
    }
});


app.delete("/agendamentos/:id", async (req, res) => {
    try {
        const { id } = req.params; // Obtém o ID do agendamento a ser deletado
        const deletedAgendamento = await Agendamento.findByIdAndDelete(id); // Deleta o agendamento pelo ID
        
        if (!deletedAgendamento) {
            return res.status(404).json({ message: "Agendamento não encontrado" }); // Caso não encontre o agendamento
        }

        res.status(200).json({ message: "Agendamento deletado com sucesso!" });
    } catch (error) {
        console.error("Erro ao deletar agendamento:", error);
        res.status(500).json({ message: "Erro ao deletar agendamento" });
    }
});
