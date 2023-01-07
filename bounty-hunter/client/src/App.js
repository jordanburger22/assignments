import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import BountyList from './components/bountyList';
import NewBounty from './components/NewBounty';

function App() {
  const [bounties, setBounties] = useState([])

  useEffect(() => {
    axios.get('/bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }, [])


  function addBounty(bountyinputs){
    axios.post("/bounties", bountyinputs)
      .then(res => setBounties(prevBounties => [
        ...prevBounties,
        res.data
      ]))
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId){
    axios.delete(`/bounties/${bountyId}`)
        .then(res => setBounties(prevBounties => prevBounties.filter(bounty => bountyId !== bounty._id)))
        .catch(err => console.log(err))
}

function editBounty(updates, bountyId){
  axios.put(`/bounties/${bountyId}`, updates)
    .then(res => setBounties(prevBounties => prevBounties.map(bounty => bountyId !== bounty._id ? bounty : res.data)))
    .catch(err => console.log(err))
}

  const bountyList = bounties.map(bounty => {
    return <BountyList 
              {...bounty}
              key= {bounty._id}
              deleteBounty= {deleteBounty}
              editBounty={editBounty}
            />
  })


  return (
    <div className="App">
      <NewBounty 
        submit={addBounty}
        btnTxt= "Add Bounty"
      />
      {bountyList}
    </div>
  );
}

export default App;
