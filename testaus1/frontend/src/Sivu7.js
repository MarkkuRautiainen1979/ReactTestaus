import React, { Component } from 'react';
import { useState } from 'react';
 
// "https://fi.wikipedia.org/wiki/Luokka:Helsingin_tapahtumat"
// "https://fi.wikipedia.org/wiki/Luokka:Joensuun_tapahtumat"
// "https://fi.wikipedia.org/wiki/Luokka:Kuopion_tapahtumat"



function Kartta() { 
  
  const [Test1, setTest1] = useState("https://fi.wikipedia.org/wiki/Luokka:Helsingin_tapahtumat");

    const handleChange = (event) => {
      setTest1(event.target.value)
    }
    
    return (    
     <div>
      <center><h2>Valitse paikkakunta </h2>
      <form>
      <select value={Test1} onChange={handleChange}>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Helsingin_tapahtumat">Helsinki</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Joensuun_tapahtumat">Joensuu</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Kuopion_tapahtumat">Kuopio</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Oulun_tapahtumat">Oulu</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Turun_tapahtumat">Turku</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Tampereen_tapahtumat">Tampere</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Vaasan_tapahtumat">Vaasa</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Porin_tapahtumat">Pori</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Jyväskylän_tapahtumat">Jyväskylä</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Lahden_tapahtumat">Lahti</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Kouvolan_tapahtumat">Kouvola</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Lappeenrannan_tapahtumat">Lappeenranta</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Hämeenlinnan_tapahtumat">Hämeenlinna</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Seinäjoen_tapahtumat">Seinäjoki</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Rovaniemen_tapahtumat">Rovaniemi</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Mikkelin_tapahtumat">Mikkeli</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Kotkan_tapahtumat">Kotka</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Kokkolan_tapahtumat">Kokkola</option>
        <option value="https://fi.wikipedia.org/wiki/Luokka:Hyvinkään_tapahtumat">Hyvinkää</option>
      </select>
    </form>
    </center>
      <iframe src={Test1} title="Helsing tapahtumat" 
      height="900" width="100%"> </iframe>
    </div>
    );      
}

export default Kartta;