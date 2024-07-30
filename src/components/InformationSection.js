import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import {
  FormGroup,
  InputGroup,
  Button,
  MenuItem,
  Icon,
  TagInput,
} from "@blueprintjs/core";
import { MultiSelect } from "@blueprintjs/select";
import { SectionTab } from "polotno/side-panel";
import FaShapes from "@meronex/icons/fa/FaShapes";
import { FaUser } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { TbSwitch2 } from "react-icons/tb";

const religions = [
  "Christianity",
  "Islam",
  "Hinduism",
  "Buddhism",
  "Sikhism",
  "Judaism",
  "No Religion",
  "Other",
];

const renderReligionItem = (religion, { handleClick, modifiers }) => (
  <MenuItem
    key={religion}
    text={religion}
    onClick={handleClick}
    active={modifiers.active}
  />
);

const renderTag = (tag) => tag;

export const InformationSection = observer(({ store }) => {
  const [person1, setPerson1] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    dod: "",
    religions: [],
  });
  const [person2, setPerson2] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    dod: "",
    religions: [],
  });
  const [showSecondPerson, setShowSecondPerson] = useState(false);

  const handleInputChange = (person, setPerson, field, value) => {
    setPerson({
      ...person,
      [field]: value,
    });
  };

  const handleReligionChange = (person, setPerson, religion) => {
    if (person.religions.includes(religion)) {
      setPerson({
        ...person,
        religions: person.religions.filter((r) => r !== religion),
      });
    } else {
      setPerson({
        ...person,
        religions: [...person.religions, religion],
      });
    }
  };

  const swapPersons = () => {
    const temp = { ...person1 };
    setPerson1(person2);
    setPerson2(temp);
  };

  const toggleSecondPerson = () => {
    setShowSecondPerson(!showSecondPerson);
  };

  return (
    <div
      style={{
        height: "100%",
        overflowY: "auto",
        paddingLeft: "5px",
        paddingRight: "5px",
        paddingTop: "15px",
      }}
    >
      <div className="button-container">
        <Button
          onClick={toggleSecondPerson}
          icon={showSecondPerson ? <FaUser /> : <BsPeopleFill />}
        >
          {showSecondPerson ? "Hide Second Person" : "Show Second Person"}
        </Button>
        <Button
          onClick={swapPersons}
          disabled={!showSecondPerson}
          icon={<TbSwitch2 />}
        >
          Swap People
        </Button>
      </div>
      <FormGroup>
        <h3>Religion</h3>
        <MultiSelect
          items={religions}
          itemRenderer={renderReligionItem}
          onItemSelect={(religion) =>
            handleReligionChange(person1, setPerson1, religion)
          }
          placeholder="Select Religion"
          tagRenderer={renderTag}
          selectedItems={person1.religions}
          tagInputProps={{
            rightElement: (
              <div
                style={{
                  display: "flex",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                  marginTop: "6px",
                  cursor: "pointer",
                }}
              >
                <Icon icon="caret-down" />
              </div>
            ),
            onRemove: (religion, index) =>
              handleReligionChange(person1, setPerson1, religion),
          }}
        />
      </FormGroup>

      <div style={{ marginTop: "30px" }}>
        <h3>Person 1</h3>
        <FormGroup label="First Name">
          <InputGroup
            value={person1.firstName}
            onChange={(e) =>
              handleInputChange(
                person1,
                setPerson1,
                "firstName",
                e.target.value
              )
            }
          />
        </FormGroup>
        <FormGroup label="Middle Name">
          <InputGroup
            value={person1.middleName}
            onChange={(e) =>
              handleInputChange(
                person1,
                setPerson1,
                "middleName",
                e.target.value
              )
            }
          />
        </FormGroup>
        <FormGroup label="Last Name">
          <InputGroup
            value={person1.lastName}
            onChange={(e) =>
              handleInputChange(person1, setPerson1, "lastName", e.target.value)
            }
          />
        </FormGroup>
        <FormGroup label="Date of Birth">
          <InputGroup
            type="date"
            value={person1.dob}
            onChange={(e) =>
              handleInputChange(person1, setPerson1, "dob", e.target.value)
            }
          />
        </FormGroup>
        <FormGroup label="Date of Death">
          <InputGroup
            type="date"
            value={person1.dod}
            onChange={(e) =>
              handleInputChange(person1, setPerson1, "dod", e.target.value)
            }
          />
        </FormGroup>
      </div>

      {showSecondPerson && (
        <>
          <div style={{ marginTop: "30px" }}>
            <h3>Person 2</h3>
            <FormGroup label="First Name">
              <InputGroup
                value={person2.firstName}
                onChange={(e) =>
                  handleInputChange(
                    person2,
                    setPerson2,
                    "firstName",
                    e.target.value
                  )
                }
              />
            </FormGroup>
            <FormGroup label="Middle Name">
              <InputGroup
                value={person2.middleName}
                onChange={(e) =>
                  handleInputChange(
                    person2,
                    setPerson2,
                    "middleName",
                    e.target.value
                  )
                }
              />
            </FormGroup>
            <FormGroup label="Last Name">
              <InputGroup
                value={person2.lastName}
                onChange={(e) =>
                  handleInputChange(
                    person2,
                    setPerson2,
                    "lastName",
                    e.target.value
                  )
                }
              />
            </FormGroup>
            <FormGroup label="Date of Birth">
              <InputGroup
                type="date"
                value={person2.dob}
                onChange={(e) =>
                  handleInputChange(person2, setPerson2, "dob", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup label="Date of Death">
              <InputGroup
                type="date"
                value={person2.dod}
                onChange={(e) =>
                  handleInputChange(person2, setPerson2, "dod", e.target.value)
                }
              />
            </FormGroup>
            <FormGroup label="Religions">
              <MultiSelect
                items={religions}
                itemRenderer={renderReligionItem}
                onItemSelect={(religion) =>
                  handleReligionChange(person2, setPerson2, religion)
                }
                tagRenderer={renderTag}
                selectedItems={person2.religions}
                tagInputProps={{
                  rightElement: (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Icon icon="caret-down" />
                    </div>
                  ),
                  onRemove: (religion, index) =>
                    handleReligionChange(person2, setPerson2, religion),
                }}
              />
            </FormGroup>
          </div>
        </>
      )}
    </div>
  );
});

export const InformationTab = (props) => (
  <SectionTab name="Information" {...props}>
    <FaShapes icon="new-text-box" />
  </SectionTab>
);
