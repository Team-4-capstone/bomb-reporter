import styled from 'styled-components';
import {useState} from "react";
import Geolocator from "../Geolocator";


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

export const ControlledModal = ({shouldShow, onClose, children}) => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);


    return shouldShow ? (<ModalBackground onclick={onClose}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <label htmlFor="select-category">Select category</label>
                <select name="selectList" id="select-category">
                    <option value="landmine">landmine</option>
                    <option value="grenade">grenade</option>
                </select>
                <input type="text" placeholder="lat"/>
                <input type="text" placeholder="lon"/>
                <label htmlFor="select-size">select size</label>
                <select name="select-size" id="select-size">
                    <option value="S">small</option>
                    <option value="M">medium</option>
                    <option value="L">large</option>
                    <option value="XL">extra large</option>
                </select>
                <label htmlFor="text-area">Extra details: </label>

                <textarea id="text-area" name="text-area" rows="4" cols="50"/>
                <button onClick={onClose}>Hide Modal</button>
                <button onClick={onClose}>Hide Modal</button>
                <div>
                    <Geolocator/>
                </div>
                {/*{children}*/}
            </ModalBody>
        </ModalBackground>
    ) : null;
}