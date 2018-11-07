import React, { Component } from 'react'; 
import SideBar from '../menu/SideBar';
import AffichageDejaVu from "./AffichageDejaVu";
import "./Avoir.css";

class DejaVu extends Component{
    state = {
        tableauFilms:[]
    }
    

    getMovieList = async () => {
        let tab =[]
        const api_key = "f43e81e7b5860bfeb6d036dd3dd602e1";

        const filmsDeMerde = localStorage.getItem("myMoviesList")
        const filmsALaCon = filmsDeMerde.slice(1,(filmsDeMerde.length-1))
        const filmsDecoupes = filmsALaCon.split(",")
        console.log(filmsDecoupes);

   
        for(let i = 0 ; i < filmsDecoupes.length ; i++){
        
        let recup_data = await fetch(`https://api.themoviedb.org/3/movie/${filmsDecoupes[i]}?api_key=${api_key}&language=fr-FR`)
        let api_data = await recup_data.json();
         await tab.push(api_data)
        console.log(tab);
        
        
        this.setState({
            tableauFilms:tab})
       }
       
    }

    componentDidMount(){
        this.getMovieList()
    }

    render(){
        
        return(
            <div>
                <div className="testSidBar">
                    <SideBar/>
                </div>
                <div className="Avoir" >
                    <h1 className="titreAvoir">Ma liste de films déjà vu</h1>
                    <div className="ro" >
                    {this.state.tableauFilms.map((element,id)=>
                    <AffichageDejaVu
                        key={id}
                        title={element.title}
                        image={element.poster_path}
                        release={element.release_date}
                        description={element.overview}
                    />)}
                    </div>
                </div>
            </div>
        )
        }
    }
export default DejaVu












































































































































































































