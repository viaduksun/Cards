import Component from "./component.js";
import {getCard} from "./ajax/api.js";
import {editVisitCard} from "./ajax/api.js";
import {displayCards} from "./main.js";


class EditUserCard extends Component {
    constructor() {
        super()
        // this.userData = userData
    }
   render(userId) {
        const userDataContainer = this.createElement('div', ['user-data-container'])
        getCard(userId)
            .then(card => {
                if (card.visitType === 'Therapist') {
                    const inputCardUserNameTitle = this.createElement('div', ['_info-title'])
                    inputCardUserNameTitle.textContent = 'Patient name'
                    const inputCardUserName = this.createElement('input', ['_info'])
                    inputCardUserName.value = card.userName

                    const inputCardUserVisitPurposeTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitPurposeTitle .textContent = 'Visit purpose'
                    const inputCardUserVisitPurpose = this.createElement('input', ['_info'])
                    inputCardUserVisitPurpose.value = card.visitpurpose

                    const inputCardUserVisitDescriptionTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitDescriptionTitle .textContent = 'Description'
                    const inputCardUserDescription= this.createElement('input', ['_info'])
                    inputCardUserDescription.value = card.description


                    const inputCardUserVisitUrgencyTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitUrgencyTitle .textContent = 'Urgency of the visit'
                    const inputCardUserUrgency = this.createElement('input', ['_info'])
                    inputCardUserUrgency.value = card.urgency

                    const inputCardUserVisitAgeTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitAgeTitle .textContent = 'Age'
                    const inputCardUserAge = this.createElement('input', ['_info'])
                    inputCardUserAge.value = card.age


                    const buttonEditCard = this.createElement('button', ['btn-modal'], 'Edit card')
                
                    console.log(inputCardUserName.value);
                    userDataContainer.append(
                        inputCardUserNameTitle, inputCardUserName, 
                        inputCardUserVisitPurposeTitle,  inputCardUserVisitPurpose, 
                        inputCardUserVisitDescriptionTitle, inputCardUserDescription, 
                        inputCardUserVisitUrgencyTitle, inputCardUserUrgency, 
                        inputCardUserVisitAgeTitle, inputCardUserAge, 
                        buttonEditCard
                    )
                } else if (card.visitType === 'Dantist') {
                    const inputCardUserNameTitle = this.createElement('div', ['_info-title'])
                    inputCardUserNameTitle.textContent = 'Patient name'
                    const inputCardUserName = this.createElement('input', ['_info'])
                    inputCardUserName.value = card.userName

                    const inputCardUserVisitPurposeTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitPurposeTitle .textContent = 'Visit purpose'
                    const inputCardUserVisitPurpose = this.createElement('input', ['_info'])
                    inputCardUserVisitPurpose.value = card.visitpurpose

                    const inputCardUserVisitDescriptionTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitDescriptionTitle .textContent = 'Description'
                    const inputCardUserDescription= this.createElement('input', ['_info'])
                    inputCardUserDescription.value = card.description

                    const inputCardUserVisitUrgencyTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitUrgencyTitle .textContent = 'Urgency of the visit'
                    const inputCardUserUrgency= this.createElement('input', ['_info'])
                    inputCardUserUrgency.value = card.urgency

                    const inputCardUserVisitLastVisitDateTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitLastVisitDateTitle .textContent = 'Last visit date'
                    const inputCardUserLastVisitDate = this.createElement('input', ['_info'])
                    inputCardUserLastVisitDate.value = card.lastvisitdate

                    const buttonEditCard = this.createElement('button', ['btn-modal'], 'Edit card')

                    userDataContainer.append(
                        inputCardUserNameTitle, inputCardUserName,
                        inputCardUserVisitPurposeTitle, inputCardUserVisitPurpose, 
                        inputCardUserVisitDescriptionTitle, inputCardUserDescription, 
                        inputCardUserVisitUrgencyTitle, inputCardUserUrgency, 
                        inputCardUserVisitLastVisitDateTitle, inputCardUserLastVisitDate,
                        buttonEditCard
                    )
                } else if (card.visitType === 'Cardiologist') {
                    const inputCardUserNameTitle = this.createElement('div', ['_info-title'])
                    inputCardUserNameTitle.textContent = 'Patient name'
                    const inputCardUserName = this.createElement('input', ['_info'])
                    inputCardUserName.value = card.userName

                    const inputCardUserVisitPurposeTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitPurposeTitle .textContent = 'Visit purpose'
                    const inputCardUserVisitPurpose = this.createElement('input', ['_info'])
                    inputCardUserVisitPurpose.value = card.visitpurpose

                    const inputCardUserVisitDescriptionTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitDescriptionTitle .textContent = 'Description'
                    const inputCardUserDescription= this.createElement('input', ['_info'])
                    inputCardUserDescription.value = card.description

                    const inputCardUserVisitUrgencyTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitUrgencyTitle .textContent = 'Urgency of the visit'
                    const inputCardUserUrgency= this.createElement('input', ['_info'])
                    inputCardUserUrgency.value = card.urgency

                    const inputCardUserVisitPressureTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitPressureTitle .textContent = 'Normal pressure'
                    const inputCardUserPressure = this.createElement('input', ['_info'])
                    inputCardUserPressure.value = card.pressure


                   
                    const inputCardUserVisitBodyMassTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitBodyMassTitle .textContent = ' Body mass index'
                    const inputCardUserBodyMass = this.createElement('input', ['_info'])
                    inputCardUserBodyMass.value = card.bodymass

                  
                    const inputCardUserVisitDiseasesTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitDiseasesTitle .textContent = 'Past diseases of the cardiovascular system'
                    const inputCardUserDiseases= this.createElement('input', ['_info'])
                    inputCardUserDiseases.value = card.diseases

                    const inputCardUserVisitAgeTitle = this.createElement('div', ['_info-title'])
                    inputCardUserVisitAgeTitle .textContent = 'Age'
                    const inputCardUserAge = this.createElement('input', ['_info'])
                    inputCardUserAge.value = card.age

             

                    const buttonEditCard = this.createElement('button', ['btn-modal'], 'Edit card')

                    userDataContainer.append(
                        inputCardUserNameTitle, inputCardUserName, 
                        inputCardUserVisitPurposeTitle, inputCardUserVisitPurpose, 
                        inputCardUserVisitDescriptionTitle, inputCardUserDescription, 
                        inputCardUserVisitUrgencyTitle, inputCardUserUrgency, 
                        inputCardUserVisitPressureTitle, inputCardUserPressure, 
                        inputCardUserVisitBodyMassTitle, inputCardUserBodyMass, 
                        inputCardUserVisitDiseasesTitle, inputCardUserDiseases, 
                        inputCardUserVisitAgeTitle, inputCardUserAge,
                        buttonEditCard
                    )
                    buttonEditCard.addEventListener('click', event => {
                        const userName = inputCardUserName.value
                        const purpose =  inputCardUserVisitPurpose.value
                        const description = inputCardUserDescription.value
                        const pressure = inputCardUserPressure.value
                        const bodymass = inputCardUserBodyMass.value
                        const urgency = inputCardUserUrgency.value
                        const diseases = inputCardUserDiseases.value
                        const age = inputCardUserAge.value
                        const id = userId

                        const userData = {userName, purpose, description, pressure, bodymass, urgency, diseases, age, id}
                        console.log(userData);

                        editVisitCard(userData, userId)
                        displayCards();
                    })
                    console.log(card);
                }   
            });
           
        return userDataContainer
    }
}

export const editUserCard = new EditUserCard();


