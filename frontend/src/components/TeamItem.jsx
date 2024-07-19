import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import { Instagram ,Linkedin,Twitter} from 'react-feather';


function Team() {
    const teamMembers = [
        { id: 1, name: 'Evan Zaqli', role: 'Front end', image: '/image/6(sq).jpeg',nim :'22.11.4713' },
        { id: 2, name: 'Berliana Kharisma Nur Habibah', role: 'Back end', image: '/image/2.jpg',nim :'22.11.4692' },
        { id: 3, name: 'Eleonora Inez Febri Almanta', role: 'Back end', image: '/image/3(sq).jpg',nim :'22.11.4697' },
        { id: 4, name: 'Sekar Taji Palupi', role: 'Fornt end', image: '/image/4(sq).jpeg',nim :'22.11.4716' },
        { id: 5, name: 'Aryant Barbaryant A', role: 'Fornt end ', image: '/image/1(sq).jpg' ,nim :'22.11.4686'},
        { id: 6, name: 'Fadila Rahman', role: 'Back End', image: '/image/5(sq).jpeg' ,nim :'22.11.4735'}
    ];

   
    const groupedMembers = [];
    for (let i = 0; i < teamMembers.length; i += 3) {
        groupedMembers.push(teamMembers.slice(i, i + 3));
    }

    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <h4 style={{ textAlign: "center", fontWeight: "bold",color:"black" }}>Our Team</h4>
            <Carousel interval={5000} indicators={false} style={{ maxHeight: "500px" }}>
                {groupedMembers.map((group, index) => (
                    <Carousel.Item key={index}>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            {group.map((member) => (
                                <Col key={member.id} sm={3} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                                    <Card style={{ width: "90%", margin: "auto" }}>
                                        <Card.Img variant="top" src={member.image} style={{ maxHeight: "300px", objectFit: "cover", borderRadius: "10px" }} />
                                        <Card.Body>
                                            <Card.Title>{member.name}</Card.Title>
                                            <Card.Text>{member.nim}</Card.Text>
                                            <Card.Text style={{color:"black"}}>{member.role}</Card.Text>
                                            <div style={{ display: 'flex', }}>
                                                <Linkedin style={{ margin: '5px', cursor: 'pointer' }} />
                                                <Instagram style={{ margin: '5px', cursor: 'pointer' }} />
                                                <Twitter style={{ margin: '5px', cursor: 'pointer' }} />
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Team;