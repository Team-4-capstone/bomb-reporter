import styled from 'styled-components';


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
width: 50%;

`;

export const ControlledModal = ({shouldShow, onClose, children}) => {


    return shouldShow ? (<ModalBackground onclick={onClose}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <input type="text" placeholder="title"/>
                <input type="text" />
                <button onClick={onClose}>Hide Modal</button>
                {children}
            </ModalBody>
        </ModalBackground>
    ) : null;
}