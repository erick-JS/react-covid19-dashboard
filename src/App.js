import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './App.css'


function App() {
  const [states, setStates] = useState([]);
  const [brazil, setBrazil] = useState([]);
  const [countries, setCountries] = useState([]);
  const [world, setWorld] = useState([]);

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento utilizando a API do navegador
    document.title = `COVID-19 Dashboard`;
    getBrazilCases();
    getBrazilianStatesCases();
    getGlobalCases()
    getCountriesCases()
  }, []);

  //Get Brazil's cases of COVID-19
  async function getBrazilCases() {
    setBrazil([]);

    let url = 'https://coronavirus-19-api.herokuapp.com/countries/Brazil';

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBrazil(data)
      })
      .catch(function (error) {
        console.error("Erro ao carregar os dados: " + error.message);
      })
  }

  //List the Brazil's cases of COVID-19
  function ListBrazilCases(props) {
    const brazil = props.brazil;
    //const viewBrazilData = <h2>{brazil.country} - {Number(brazil.cases).toLocaleString("pt-br")} - {Number(brazil.deaths).toLocaleString("pt-br")} - {Number(brazil.recovered).toLocaleString("pt-br")}</h2>
    const viewBrazilData = Number(brazil.cases).toLocaleString("pt-br")

    return (
      <h2>
        {viewBrazilData}
      </h2>
    );
  }

  function ListBrazilDeaths(props) {
    const brazil = props.brazil;
    //const viewBrazilData = <h2>{brazil.country} - {Number(brazil.cases).toLocaleString("pt-br")} - {Number(brazil.deaths).toLocaleString("pt-br")} - {Number(brazil.recovered).toLocaleString("pt-br")}</h2>
    const viewBrazilData = Number(brazil.deaths).toLocaleString("pt-br")

    return (
      <h2>
        {viewBrazilData}
      </h2>
    );
  }

  function ListBrazilRecovered(props) {
    const brazil = props.brazil;
    //const viewBrazilData = <h2>{brazil.country} - {Number(brazil.cases).toLocaleString("pt-br")} - {Number(brazil.deaths).toLocaleString("pt-br")} - {Number(brazil.recovered).toLocaleString("pt-br")}</h2>
    const viewBrazilData = Number(brazil.recovered).toLocaleString("pt-br")

    return (
      <h2>
        {viewBrazilData}
      </h2>
    );
  }

  //Get the Brazilian States' cases of COVID-19
  async function getBrazilianStatesCases() {
    setStates([])

    let url = `https://romarioarruda.dev/apicovid/dados`
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.casos)
        setStates(data.casos)
      })
      .catch(function (error) {
        console.error('Houve um problema ao efetuar a requisição: ' + error.message);
      });
  }

  //List the Brazilian States' cases of COVID-19
  function ListBrazilianStates(props) {
    const states = props.states
    const listStates = states.map((state) =>
      <TableRow key={state.id_registro}>
        <TableCell align="center">{state.uf}</TableCell>
        <TableCell align="center">{Number(state.casos_acumulado).toLocaleString('pt-br')}</TableCell>
        <TableCell align="center">{Number(state.obitos_acumulado).toLocaleString('pt-br')}</TableCell>
      </TableRow>
    );
    return (
      <TableBody>
        { listStates}
      </TableBody>
    );
  }

  //Get the global situation about the COVID-19
  async function getGlobalCases() {
    setWorld([]);

    let url = 'https://coronavirus-19-api.herokuapp.com/all';

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setWorld(data)
      })
      .catch(function (error) {
        console.error("Erro ao carregar os dados: " + error.message);
      })
  }

  //List the Brazil's cases of COVID-19
  function ListGlobalCases(props) {
    const world = props.world;
    //const viewBrazilData = <h2>{brazil.country} - {Number(brazil.cases).toLocaleString("pt-br")} - {Number(brazil.deaths).toLocaleString("pt-br")} - {Number(brazil.recovered).toLocaleString("pt-br")}</h2>
    const viewWorldData = Number(world.cases).toLocaleString("pt-br")

    return (
      <h2>
        {viewWorldData}
      </h2>
    );
  }

  function ListGlobalDeaths(props) {
    const world = props.world;
    //const viewworldData = <h2>{world.country} - {Number(world.cases).toLocaleString("pt-br")} - {Number(world.deaths).toLocaleString("pt-br")} - {Number(world.recovered).toLocaleString("pt-br")}</h2>
    const viewWorldData = Number(world.deaths).toLocaleString("pt-br")

    return (
      <h2>
        {viewWorldData}
      </h2>
    );
  }

  function ListGlobalRecovered(props) {
    const world = props.world;
    //const viewBrazilData = <h2>{brazil.country} - {Number(brazil.cases).toLocaleString("pt-br")} - {Number(brazil.deaths).toLocaleString("pt-br")} - {Number(brazil.recovered).toLocaleString("pt-br")}</h2>
    const viewWorldData = Number(world.recovered).toLocaleString("pt-br")

    return (
      <h2>
        {viewWorldData}
      </h2>
    );
  }

  //Get Countries' cases of COVID-19
  async function getCountriesCases() {
    setCountries([]);

    let url = 'https://coronavirus-19-api.herokuapp.com/countries';

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCountries(data)
      })
      .catch(function (error) {
        console.error("Erro ao carregar os dados: " + error.message);
      })
  }

  //List the countries' cases of COVID-19
  function ListCountriesCases(props) {
    const countries = props.countries
    const listCountries = countries.map((nation) =>
      <TableRow key={nation.country}>
        <TableCell align="center">{nation.country}</TableCell>
        <TableCell align="center">{Number(nation.cases).toLocaleString('pt-br')}</TableCell>
        <TableCell align="center">{Number(nation.deaths).toLocaleString('pt-br')}</TableCell>
        <TableCell align="center">{Number(nation.recovered).toLocaleString('pt-br')}</TableCell>
      </TableRow>
    );
    return (
      <TableBody>
        { listCountries}
      </TableBody>
    );
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">
            COVID-19 Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h3" gutterBottom>
        Coronavírus
      </Typography>
      <Typography variant="body1" gutterBottom>
        Consulte aqui as situações global, do Brasil e do seu Estado.
        Saiba a quantidade de casos confirmados, mortes e recuperados
        do coronavírus.
      </Typography>
      <Container>
        <Typography component="div" style={{ backgroundColor: '#043d0dbc', color: '#ffffff', fontWeight: 'bold' }}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Brasil
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead style={{ backgroundColor: '#043d0dbc' }}>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Casos confirmados</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Óbitos</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Recuperados</TableCell>
                </TableRow>
              </TableHead>
              <TableRow style={{ backgroundColor: '#043d0dbc' }}>
                <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>
                  <ListBrazilCases brazil={brazil} />
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>
                  <ListBrazilDeaths brazil={brazil} />
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>
                  <ListBrazilRecovered brazil={brazil} />
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          <TableContainer component={Paper}>
            <Table>
              <TableHead style={{ backgroundColor: '#043d0dbc' }}>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Estado</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Casos confirmados</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Óbitos</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Typography>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh', overflowY: 'auto' }}>
          <TableContainer component={Paper}>
            <Table>
              {states.length > 0
                ? <ListBrazilianStates states={states} />
                : "Não há registro"
              }
            </Table>
          </TableContainer>
        </Typography>
      </Container>
      <Container>
        <Typography component="div" style={{ backgroundColor: '#125481', color: '#ffffff', fontWeight: 'bold' }}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Mundo
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead style={{ backgroundColor: '#125481' }}>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Casos confirmados</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Óbitos</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Recuperados</TableCell>
                </TableRow>
              </TableHead>
              <TableRow style={{ backgroundColor: '#125481' }}>

                <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>
                  <ListGlobalCases world={world} />
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>
                  <ListGlobalDeaths world={world} />
                </TableCell>
                <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>
                  <ListGlobalRecovered world={world} />
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
          <TableContainer component={Paper}>
            <Table>
              <TableHead style={{ backgroundColor: '#125481' }}>
                <TableRow>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>País</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Casos confirmados</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Óbitos</TableCell>
                  <TableCell align="center" style={{ fontWeight: 'bold', color: '#ffffff' }}>Recuperados</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Typography>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '40vh', overflowY: 'auto' }}>
          <TableContainer component={Paper}>
            <Table>
              {countries.length > 0
                ? <ListCountriesCases countries={countries} />
                : "Não há registro"
              }
            </Table>
          </TableContainer>
        </Typography>
      </Container>
    </div>
  );
}


export default App