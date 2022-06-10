import styled from 'styled-components';
import {useState} from "react";
import Geolocator from "../coordinatesForm/Geolocator";


const ModalBackground = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0,0,0,0.5);
`;

const ModalBody = styled.div`
background-color: white;
margin: 10% auto;
padding: 20px;
width: 75%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-between;

`;

export const ControlledModal = ({shouldShow, onClose}) => {

    return shouldShow ? (<ModalBackground onclick={onClose}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <Geolocator/>
                <button className="close-modal" onClick={onClose}>X</button>
            </ModalBody>
        </ModalBackground>
    ) : null;
}