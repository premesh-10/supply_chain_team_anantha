import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import {
    Table,
    Form,
    Service,
    Profile,
    CompleteShipment,
    GetShipment,
    StartShipment,
} from "../Components/index";
import {TrackingContext} from "../Context/TrackingContext";
import { Services } from "./index copy";

const index = () => {
    const {
        currentUser,
        createShipment,
        getAllShipment,
        startShipment,
        getShipmentsCount,
    } = useContext(TrackingContext);

    //STATE VARIABLE
    const [createShipmentModel, setCreateShipmentModel] = useState(false);
    const [openProfile,setOpenProfile] = useState(false);
    const [startModal, setStartModal] = useState(false);
    const [completeModal, setCompleteModal] = useState(false);
    const [getModal, setGetModal] = useState(false);
    //DATA STATE VARIABLE
    const [allShipmentsdata, setallShipment] = useState();

    useEffect(() => {
        const getCampaignData = getAllShipmentsData;

        return async () =>{
            const allData = await getCampaignsData;
            setallShipmentdata(allData);
    };
  },[]);

  return (
    <>
      <Services
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModal={setGetModal}
        setStartModal={setStartModal}
      />
      <Table
      setCreateShipmentModel={setCreateShipmentModel}
      allShipmentsdata={allShipmentsdata}
      />

      <Form
      createShipmentModel={createShipmentModel}

      createShipment={createShipment}

      setCreateShipmentModel={setCreateShipmentModel}
      />

     <Profile
      openProfile={openProfile}
      setOpenProfile={setOpenProfile}
      currentUser={currentUser}
      getShipmentsCount={getShipmentsCount}
     />

     <CompleteShipment
     completeModal={completeModal}
     setCompleteModal={setCompleteModal}
     completeShipment={completeShipment}

    />

     <GetShipment

     getModel={getModel}

setGetModel={setGetModel}

     getShipment={getShipment}
     />

    <StartShipment

     startModal={startModal}

     setStartModal={setStartModal}

     startShipment={startShipment}

    />
</>
  );
};

export default index;



