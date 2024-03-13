// FilterModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FilterModel = ({ show, onHide, onApplyFilter, filterOptions, setFilterOptions }) => {

    
      const handleBirthDateChange = (e) => {
          setFilterOptions({ ...filterOptions, birthDate: e.target.value });
    };
    const handleNextBirthDateChange = (e) => {
        setFilterOptions({ ...filterOptions, nextBirthDate: e.target.value })
    };
    const handleGenderChange = (e) => {
        setFilterOptions({ ...filterOptions, gender: e.target.value });
      };
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Filter Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formFilterBirthDate">
                        <Form.Label>BirthDate</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Select birth date"
                            value={filterOptions.birthDate || ''}
                            onChange={handleBirthDateChange}
                        />
                        <Form.Control
                            type="date"
                            placeholder="Select birth date"
                            value={filterOptions.nextBirthDate || ''}
                            onChange={handleNextBirthDateChange}
                        />
                        
                    </Form.Group>
                    <Form.Group controlId="formFilterGender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Select Gender"
                            value={filterOptions.gender || ''}
                            onChange={handleGenderChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => { onApplyFilter(); onHide(); }}>
                    Apply Filters
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FilterModel;
