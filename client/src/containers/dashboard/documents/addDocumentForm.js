import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { apiBaseUrl } from '../../../constants';

const AddDocumentForm = (props) => {

    const [modalState, setModalState] = useState(false);
    const toggle = () => setModalState(!modalState);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");
    const [date, setDate] = useState("");
    const [binName, setBinName] = useState("");
    const [isNewBin, setIsNewBin] = useState(false);
    const [visibilityMode, setVisibilityMode] = useState(props.user.mode);
    const userId = props.user._id;
    const userMode = props.user.mode;

    const toggleHandler = () => {
        props.updateCards();
        toggle();
    }

    const uploadHandler = () => {
        if (!binName) {
            alert("Add a bin name or choose one");
            return;
        }

        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('binName', binName);
        formData.append('document', file);
        formData.append('date', date);
        formData.append('mode', visibilityMode);

        const token = localStorage.getItem('token');

        axios.post(apiBaseUrl + '/document', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
        }).then(response => {
            toggleHandler();
        });
    }

    const handleBinName = (event) => {
        if (event.target.value === "") {
            setIsNewBin(true);
        } else {
            setIsNewBin(false);
            setBinName(event.target.value);
        }
    }

    const visibilityModes = [
        { name: "admin", optionLabel: "Visible to only admins" },
        { name: "hod", optionLabel: "Visible to admins and HOD" },
        { name: "coordinator", optionLabel: "Visible to admins, HOD, and Co-ordinators" },
        { name: "faculty", optionLabel: "Visible to everyone" },
    ];

    const accessLookup = {
        "faculty": 4,
        "coordinator": 3,
        "hod": 2,
        "admin": 1,
    };

    return (
        <div>
            <div style={{
                padding: '20px',
                width: '100vw',
                display: 'flex',
                alignItems: 'center'
            }}>
                <h1>Documents</h1>
                <Button color="primary" onClick={toggleHandler} style={{
                    marginLeft: 'auto',
                    transform: 'translate(0px, -5px)'
                }}>Add Document</Button>
            </div>

            <Modal isOpen={modalState} toggle={toggleHandler} unmountOnClose={true}>
                <ModalHeader toggle={toggleHandler}>Add new document</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="docTitle">Title</Label>
                            <Input type="text" value={title} onChange={event => setTitle(event.target.value)} name="title" id="docTitle" placeholder="Title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="docDescription">Description</Label>
                            <Input type="textarea" value={description} onChange={event => setDescription(event.target.value)} name="description" id="docDescription" placeholder="Description" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="docFile">File</Label>
                            <Input type="file" onChange={event => setFile(event.target.files[0])} name="document" id="docFile" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="docBin">Bin</Label>
                            <Input type="select" onChange={event => handleBinName(event)} name="binName">
                                <option value=""></option>
                                {props.bins.map(bin => <option value={bin}>{bin}</option>)}
                                <option value="">Add new bin</option>
                            </Input>
                            {isNewBin && <Input type="text" onChange={event => setBinName(event.target.value)} placeholder="Enter new bin name here" name="binName" />}
                        </FormGroup>
                        {userMode != "faculty" && <FormGroup>
                            <Label for="docBin">Visibility</Label>
                            <Input type="select" value={visibilityMode} onChange={event => setVisibilityMode(event.target.value)} name="binName">
                                {visibilityModes.slice(accessLookup[userMode] - 1).map(mode => <option value={mode.name}> {mode.optionLabel}</option>)}
                            </Input>
                        </FormGroup>}
                        <FormGroup>
                            <Label for="docDate">Date</Label>
                            <Input type="date" value={date} onChange={event => setDate(event.target.value)} name="date" id="docDate" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={uploadHandler}>Add Document</Button>{' '}
                    <Button color="secondary" onClick={toggleHandler}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default AddDocumentForm;