/**
 * ? @description : Student Waitlist Form
 */

// Dependencies
import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

// Axios Component
import Axios from "../api/StudentApi";

// CSS Component
import "./StudentModule.css";

function StudentModule() {
  // * State Variables
  const [studentData, setStudentData] = useState({
    student_name: "",
    whatsappno: "",
    sponser_name: "",
    sponser_contactno: "",
    sponser_address: "",
    student_age: "",
    spoken_language_1: "",
    education: "",
    level_reading_skill: "",
    class_contactno: "",
    student_status: "active",
    role: "student",
    group_status: "ungrouped",
    student_mapped_status: "unmapped",
    is_terms_agreed: true,
    spoken_language_2: null,
    spoken_language_3: null,
    spoken_language_4: null,
    spoken_language_5: null,
    spoken_language_6: null,
    group_id: null,
    group_name: null,
    map_id: null,
    is_under_eighteen: null,
    medium_education: null,
    parent_name: null,
    parent_contactno: null,
    mapped_to_teacher: null,
    batch_member_id: null,
    created_by: "self",
  });
  const [studentValidation, setStudentValidation] = useState({
    isInvalidStudentName: false,
    isInvalidClassContactNo: false,
    isInvalidStudentWhatsapp: false,
    isInvalidSponsorName: false,
    isInvalidSponsorNumber: false,
    isInvalidSponsorAddress: false,
    isInvalidStudentAge: false,
    isInvalidStudentLanguage: false,
    isInvalidStudentEducation: false,
    isInvalidStudentReadingSkill: false,
  });

  // TODO : Form Validation
  const studentFormValidation = () => {
    var submitButton = true;
    var invalidStudentName = false;
    var invalidClassContactNo = false;
    var invalidStudentWhatsapp = false;
    var invalidSponsorName = false;
    var invalidSponsorNumber = false;
    var invalidSponsorAddress = false;
    var invalidStudentAge = false;
    var invalidStudentLanguage = false;
    var invalidStudentEducation = false;
    var invalidStudentReadingSkill = false;

    if (
      studentData.student_name.length === 0 ||
      studentData.student_name.length > 30
    ) {
      invalidStudentName = true;
      submitButton = false;
    }

    if (!(studentData.class_contactno.length === 10)) {
      invalidClassContactNo = true;
      submitButton = false;
    }

    if (!(studentData.whatsappno.length === 10)) {
      invalidStudentWhatsapp = true;
      submitButton = false;
    }

    if (
      studentData.sponser_name.length === 0 ||
      studentData.sponser_name.length > 30
    ) {
      invalidSponsorName = true;
      submitButton = false;
    }

    if (!(studentData.sponser_contactno.length === 10)) {
      invalidSponsorNumber = true;
      submitButton = false;
    }

    if (studentData.sponser_address.length === 0) {
      invalidSponsorAddress = true;
      submitButton = false;
    }

    if (studentData.student_age.length === 0) {
      invalidStudentAge = true;
      submitButton = false;
    }

    if (
      studentData.spoken_language_1.length === 0 ||
      studentData.spoken_language_1.length > 30
    ) {
      invalidStudentLanguage = true;
      submitButton = false;
    }

    if (
      studentData.education.length === 0 ||
      studentData.education.length > 50
    ) {
      invalidStudentEducation = true;
      submitButton = false;
    }

    if (studentData.level_reading_skill.length === 0) {
      invalidStudentReadingSkill = true;
      submitButton = false;
    }

    setStudentValidation({
      ...studentValidation,
      isInvalidStudentName: invalidStudentName,
      isInvalidClassContactNo: invalidClassContactNo,
      isInvalidStudentWhatsapp: invalidStudentWhatsapp,
      isInvalidSponsorName: invalidSponsorName,
      isInvalidSponsorNumber: invalidSponsorNumber,
      isInvalidSponsorAddress: invalidSponsorAddress,
      isInvalidStudentAge: invalidStudentAge,
      isInvalidStudentLanguage: invalidStudentLanguage,
      isInvalidStudentEducation: invalidStudentEducation,
      isInvalidStudentReadingSkill: invalidStudentReadingSkill,
    });
    return submitButton;
  };

  // ? Post Method : Create Student Profile By Admin
  async function postData() {
    try {
      let finaldata = {
        ...studentData,
        is_under_eighteen:
          parseInt(studentData.student_age) > 18 ? false : true,
      };

      let options = {
        method: "POST",
        url: "/student",
        auth: true,
        data: finaldata,
      };

      const response = await Axios(
        options.method,
        options.url,
        options.auth,
        options.data
      );

      if (response.status === 201) {
        alert("Form data submitted successfully !");
        window.location.reload();
      }
    } catch (error) {
      alert("Error occurred ! Please try again later.");
    }
  }

  return (
    <div>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 8, offset: 2 }}
          xl={{ span: 6, offset: 3 }}
        >
          {/* Title */}
          <h1 className="mt-3 student-title">
            Let's Teach English - Student Form
          </h1>

          {/* Form */}
          <Form>
            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Name <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                type="name"
                name="student_name"
                placeholder="Name"
                value={studentData.student_name}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    student_name: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidStudentName: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidStudentName}
              />

              <Form.Control.Feedback type="invalid">
                Student name is mandatory and should be less than 30 characters.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Phone Number <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                type="tel"
                name="class_contactno"
                placeholder="Number"
                value={studentData.class_contactno}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    class_contactno: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidClassContactNo: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidClassContactNo}
              />

              <Form.Control.Feedback type="invalid">
                Student number is mandatory and must contains 10 digits.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Student's WhatsApp Number If different from the above phone
                number&nbsp;
                <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                type="tel"
                name="whatsappno"
                placeholder="WhatsApp Number"
                value={studentData.whatsappno}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    whatsappno: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidStudentWhatsapp: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidStudentWhatsapp}
              />

              <Form.Control.Feedback type="invalid">
                Student WhatsApp number is mandatory and must contains 10
                digits.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Sponsor's Name&nbsp;
                <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                type="name"
                name="sponser_name"
                placeholder="Sponsor's Name"
                value={studentData.sponser_name}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    sponser_name: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidSponsorName: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidSponsorName}
              />

              <Form.Control.Feedback type="invalid">
                Sponsor name is mandatory and should be less than 30 characters.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Sponsor's Phone Number&nbsp;
                <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                type="tel"
                name="sponser_contactno"
                placeholder="Sponsor's Number"
                value={studentData.sponser_contactno}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    sponser_contactno: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidSponsorNumber: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidSponsorNumber}
              />

              <Form.Control.Feedback type="invalid">
                Sponsor number is mandatory and must contains 10 digits.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Sponsor's Residence&nbsp;
                <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Check
                type="radio"
                name="sponser_address"
                label="APR Villas"
                value="APR Villas"
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    sponser_address: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidSponsorAddress: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidSponsorAddress}
              />

              <Form.Check
                type="radio"
                name="sponser_address"
                label="APR Towers"
                value="APR Towers"
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    sponser_address: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidSponsorAddress: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidSponsorAddress}
              />

              <Form.Check
                type="radio"
                name="sponser_address"
                label="Others"
                value="Others"
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    sponser_address: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidSponsorAddress: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidSponsorAddress}
              />

              <Form.Control.Feedback type="invalid">
                Sponsor address is mandatory.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Student Age <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                type="number"
                name="student_age"
                placeholder="Age"
                value={studentData.student_age}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    student_age: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidStudentAge: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidStudentAge}
              />

              <Form.Control.Feedback type="invalid">
                Age is mandatory.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Spoken Language - 1&nbsp;
                <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                type="name"
                name="spoken_language_1"
                placeholder="First Language"
                value={studentData.spoken_language_1}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    spoken_language_1: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidStudentLanguage: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidStudentLanguage}
              />

              <Form.Control.Feedback type="invalid">
                Spoken Language is mandatory and should not exceeds 30
                characters.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>Spoken Language - 2</Form.Label>

              <Form.Control
                type="name"
                name="spoken_language_2"
                placeholder="Second Language"
                value={studentData.spoken_language_2}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    spoken_language_2: event.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>Spoken Language - 3</Form.Label>

              <Form.Control
                type="name"
                name="spoken_language_3"
                placeholder="Third Language"
                value={studentData.spoken_language_3}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    spoken_language_3: event.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>Spoken Language - 4</Form.Label>

              <Form.Control
                type="name"
                name="spoken_language_4"
                placeholder="Fourth Language"
                value={studentData.spoken_language_4}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    spoken_language_4: event.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>Spoken Language - 5</Form.Label>

              <Form.Control
                type="name"
                name="spoken_language_5"
                placeholder="Fifth Language"
                value={studentData.spoken_language_5}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    spoken_language_5: event.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>Spoken Language - 6</Form.Label>

              <Form.Control
                type="name"
                name="spoken_language_6"
                placeholder="Sixth Language"
                value={studentData.spoken_language_6}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    spoken_language_6: event.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Highest Level of Education&nbsp;
                <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                type="name"
                name="education"
                placeholder="Education"
                value={studentData.education}
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    education: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidStudentEducation: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidStudentEducation}
              />

              <Form.Control.Feedback type="invalid">
                Education level is mandatory and should not exceeds 50
                characters.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 student-form">
              <Form.Label>
                Reading Skill&nbsp;
                <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Check
                type="radio"
                name="level_reading_skill"
                label="Beginner"
                value="Beginner"
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    level_reading_skill: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidStudentReadingSkill: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidStudentReadingSkill}
              />

              <Form.Check
                type="radio"
                name="level_reading_skill"
                label="Intermediate"
                value="Intermediate"
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    level_reading_skill: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidStudentReadingSkill: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidStudentReadingSkill}
              />

              <Form.Check
                type="radio"
                name="level_reading_skill"
                label="Advanced"
                value="Advanced"
                onChange={(event) => {
                  setStudentData({
                    ...studentData,
                    level_reading_skill: event.target.value,
                  });
                  setStudentValidation({
                    ...studentValidation,
                    isInvalidStudentReadingSkill: false,
                  });
                }}
                isInvalid={studentValidation.isInvalidStudentReadingSkill}
              />

              <Form.Control.Feedback type="invalid">
                Reading skill is mandatory.
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="mb-3 student-submit"
              onClick={(e) => {
                e.preventDefault();
                var isValid = studentFormValidation();
                if (isValid) {
                  postData();
                } else {
                  alert("Please fill all the required fields.");
                }
              }}
            >
              SUBMIT
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default StudentModule;
