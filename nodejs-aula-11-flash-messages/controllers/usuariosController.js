import express from "express";
const router = express.Router();
//importando o model
import Usuario from "../models/Usuario.js";

//Importando a biblioteca bcrypt(hash de senha)
import bcrypt from "bcrypt";

//ROTA LOGIN
router.get("/login", (req, res) => {
  res.render("login"), {
    loggedOut: true,
    
    messages: req.flash()
  };
});

//ROTA DE LOGOUT
router.get("/logout", (req, res)=>{
  //limpa a sessão
  req.session.user = undefined;
  //Redireciona para a home
  res.redirect("/");
})

//ROTA DE AUTENTICAÇÃO
router.post("/autenticar", (req, res)=>{
    //Coletando os dados do usuário
    const email = req.body.email
    const password = req.body.password
    //Buscando o usuário no banco
    Usuario.findOne({where: {email: email}}).then((usuario) =>{
        //SE O USUÁRIO EXISTIR
        if(usuario != undefined){
            //VALIDANDO A SENHA(HASH)
            const senhaCorreta = bcrypt.compareSync(password, usuario.password);
            //Se A SENHA FOR VÁLIDA
            if(senhaCorreta){
                //AUTORIZA O LOGIN E CRIA A SESÃO PARA O USUÁRIO
                req.session.user = {
                  id: usuario.id,
                  email: usuario.email,
                };
              
                //res.send(`Usuário logado: <br> 
                  //ID: ${req.session.user["id"]} <br>
                 // E-mail: ${req.session.user["email"]}`);

                 //cri8ando a mensagem de feedback de  sucesso
                 req.flash('success', 'Login efetuado com sucesso!');

                //redirecionando para home após o login
                res.redirect("/");
                //SE A SENHA FOR INVÁLIDA      
            }else{
               req.flash('danger', 'A senha informada está incorreta! Tente novamente.')
               res.redirect("/login");
            }
        //SE O USUÁRIO NÃO EXISTIR    
        }else{
            req.flash('danger', 'O usuário informado não existe! Verifique os dados e tente novamente')
            res.redirect("/login");
        }
    });
});

//ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro",{
    loggedOut: true,

     messages: req.flash()
  });
});

router.post("/cadastro/novo", (req, res) => {
  //coletar os dados do formulário
  const email = req.body.email;
  const password = req.body.password;

  //Verificando se o usuário já existe
  Usuario.findOne({ where: { email: email } }).then((usuario) => {
    //Usuário não encontrado
    if (usuario == undefined) {
      //Cadastra o usuário
      //GERANDO O HASH DE SENHA
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      //Enviando para o banco de dados
      Usuario.create({
        email: email,
        password: hash,
      })
        .then(() => res.redirect("/login"))
        .catch((error) => {
          console.log(`Erro ao criar a conta. ERRO: ${error}`);
        });
        //Usuário já cadastrado
    }else{
       req.flash('danger', 'O usuário informado já está cadastrado! Faça o login')
               res.redirect("/cadastro");
    }
  });
});

export default router;
