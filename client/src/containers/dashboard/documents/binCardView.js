import React from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import './card.css';
import { apiBaseUrl } from '../../../constants';

const BinCardView = (props) => {

    const deleteHandler = (cardId) => {
        const token = localStorage.getItem("token");
        axios.delete(apiBaseUrl + '/document', {
            headers: {
                'Authorization': token
            },
            data: {
                docId: cardId
            }
        });
        props.updateCards();
    }

    const downloadHandler = (doc) => {
        const token = localStorage.getItem("token");
        axios.get(apiBaseUrl + '/document/' + doc._id, {
            headers: {
                'Authorization': token,
            },
            responseType: 'blob'
        }).then(res => {
            fileDownload(res.data, doc.title + '_' + doc.fileName);
        })
    }

    return (
        props.cardList.length > 0 && <div>
            <h2 style={{
                margin: '0px',
                marginLeft: '20px',
                marginTop: '20px'
            }}>{props.binName}</h2>
            <div style={{
                minHeight: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row'
            }}>
                {props.cardList.map(card => <Card className="binCards" style={{
                    width: '300px',
                    margin: '20px',
                }}>
                    <CardBody>
                        <CardTitle tag="h5">{card.title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{card.date}</CardSubtitle>
                        <CardText>{card.description}</CardText>
                        <Button color="primary" onClick={() => downloadHandler(card)}>Download</Button>
                        <Button color="danger" onClick={() => deleteHandler(card._id)}>Delete</Button>
                    </CardBody>
                </Card>)}
            </div>
        </div>
    );
};

export default BinCardView;