// Affichage de la photo
document.getElementById('profilePic').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preview-photo').src = e.target.result;
            document.getElementById('preview-photo').style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

// Changement des sections
document.querySelectorAll('.section-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Retire la classe active de tous les boutons
        document.querySelectorAll('.section-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        // Retire la classe active de toutes les sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Ajoute la classe active au bouton cliqué
        button.classList.add('active');
        // Affiche la section correspondante
        document.getElementById(button.dataset.section).classList.add('active');
    });
});

// Mise à jour des informations personnelles
function updatePersonalInfo() {
    const fullName = document.getElementById('fullName').value;
    const title = document.getElementById('title').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const about = document.getElementById('about').value;

    // Met à jour la prévisualisation
    document.getElementById('preview-name').textContent = fullName || 'Votre Nom';
    document.getElementById('preview-title').textContent = title || 'Votre Titre';
    document.getElementById('preview-contact').textContent = `${email} | ${phone}`;
    document.getElementById('preview-about').textContent = about;
}

// Écoute les changements dans les champs personnels
document.querySelectorAll('#personal input, #personal textarea').forEach(input => {
    input.addEventListener('input', updatePersonalInfo);
});

// EXPÉRIENCE
document.getElementById('addExperience').addEventListener('click', () => {
    const experienceList = document.getElementById('experienceList');
    const experienceDiv = document.createElement('div');
    experienceDiv.className = 'experience-item';
    experienceDiv.innerHTML = `
        <input type="text" placeholder="Titre du poste" class="exp-title">
        <input type="text" placeholder="Entreprise" class="exp-company">
        <input type="text" placeholder="Période" class="exp-period">
        <textarea placeholder="Description" class="exp-description"></textarea>
        <button class="delete-btn">Supprimer</button>
    `;

    experienceList.appendChild(experienceDiv);

    experienceDiv.querySelector('.delete-btn').addEventListener('click', () => {
        experienceDiv.remove();
        updateExperiences();
    });

    experienceDiv.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', updateExperiences);
    });
});

function updateExperiences() {
    const previewExperience = document.getElementById('preview-experience');
    previewExperience.innerHTML = '';

    document.querySelectorAll('.experience-item').forEach(item => {
        const title = item.querySelector('.exp-title').value;
        const company = item.querySelector('.exp-company').value;
        const period = item.querySelector('.exp-period').value;
        const description = item.querySelector('.exp-description').value;

        if (title || company || period || description) {
            const expDiv = document.createElement('div');
            expDiv.className = 'cv-item';
            expDiv.innerHTML = `
                <h3>${title}</h3>
                <p>${company} | ${period}</p>
                <p>${description}</p>
            `;
            previewExperience.appendChild(expDiv);
        }
    });
}

// FORMATION
document.getElementById('addEducation').addEventListener('click', () => {
    const educationList = document.getElementById('educationList');
    const educationDiv = document.createElement('div');
    educationDiv.className = 'education-item';
    educationDiv.innerHTML = `
        <input type="text" placeholder="Diplôme" class="edu-degree">
        <input type="text" placeholder="École" class="edu-school">
        <input type="text" placeholder="Année" class="edu-year">
        <button class="delete-btn">Supprimer</button>
    `;

    educationList.appendChild(educationDiv);

    educationDiv.querySelector('.delete-btn').addEventListener('click', () => {
        educationDiv.remove();
        updateEducation();
    });

    educationDiv.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateEducation);
    });
});

function updateEducation() {
    const previewEducation = document.getElementById('preview-education');
    previewEducation.innerHTML = '';

    document.querySelectorAll('.education-item').forEach(item => {
        const degree = item.querySelector('.edu-degree').value;
        const school = item.querySelector('.edu-school').value;
        const year = item.querySelector('.edu-year').value;

        if (degree || school || year) {
            const eduDiv = document.createElement('div');
            eduDiv.className = 'cv-item';
            eduDiv.innerHTML = `
                <h3>${degree}</h3>
                <p>${school} | ${year}</p>
            `;
            previewEducation.appendChild(eduDiv);
        }
    });
}

// COMPTÉTENCES
document.getElementById('addSkill').addEventListener('click', () => {
    const skillsList = document.getElementById('skillsList');
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-item';
    skillDiv.innerHTML = `
        <input type="text" placeholder="Compétence" class="skill-name">
        <select class="skill-level">
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
            <option value="Expert">Expert</option>
        </select>
        <button class="delete-btn">Supprimer</button>
    `;

    skillsList.appendChild(skillDiv);

    skillDiv.querySelector('.delete-btn').addEventListener('click', () => {
        skillDiv.remove();
        updateSkills();
    });

    skillDiv.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', updateSkills);
    });
});

function updateSkills() {
    const previewSkills = document.getElementById('preview-skills');
    previewSkills.innerHTML = '';

    document.querySelectorAll('.skill-item').forEach(item => {
        const name = item.querySelector('.skill-name').value;
        const level = item.querySelector('.skill-level').value;

        if (name) {
            const skillDiv = document.createElement('div');
            skillDiv.className = 'cv-item';
            skillDiv.innerHTML = `
                <h3>${name}</h3>
                <p>Niveau: ${level}</p>
            `;
            previewSkills.appendChild(skillDiv);
        }
    });
}

// LANGUES
document.getElementById('addLanguage').addEventListener('click', () => {
    const languagesList = document.getElementById('languagesList');
    const languageDiv = document.createElement('div');
    languageDiv.className = 'language-item';
    languageDiv.innerHTML = `
        <input type="text" placeholder="Langue" class="language-name">
        <select class="language-level">
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
            <option value="Bilingue">Bilingue</option>
        </select>
        <button class="delete-btn">Supprimer</button>
    `;

    languagesList.appendChild(languageDiv);

    languageDiv.querySelector('.delete-btn').addEventListener('click', () => {
        languageDiv.remove();
        updateLanguages();
    });

    languageDiv.querySelectorAll('input, select').forEach(input => {
        input.addEventListener('input', updateLanguages);
    });
});


function updateLanguages() {
    const previewLanguages = document.getElementById('preview-languages');
    previewLanguages.innerHTML = '';

    document.querySelectorAll('.language-item').forEach(item => {
        const name = item.querySelector('.language-name').value;
        const level = item.querySelector('.language-level').value;

        if (name) {
            const languageDiv = document.createElement('div');
            languageDiv.className = 'cv-item';
            languageDiv.innerHTML = `
                <h3>${name}</h3>
                <p>Niveau: ${level}</p>
            `;
            previewLanguages.appendChild(languageDiv);
        }
    });
}

// PASSION
document.getElementById('addHobby').addEventListener('click', () => {
    const hobbiesList = document.getElementById('hobbiesList');
    const hobbyDiv = document.createElement('div');
    hobbyDiv.className = 'hobby-item';
    hobbyDiv.innerHTML = `
        <input type="text" placeholder="Hobby" class="hobby-name">
        <button class="delete-btn">Supprimer</button>
    `;

    hobbiesList.appendChild(hobbyDiv);

    hobbyDiv.querySelector('.delete-btn').addEventListener('click', () => {
        hobbyDiv.remove();
        updateHobbies();
    });

    hobbyDiv.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', updateHobbies);
    });
});

function updateHobbies() {
    const previewHobbies = document.getElementById('preview-hobbies');
    previewHobbies.innerHTML = '';

    document.querySelectorAll('.hobby-item').forEach(item => {
        const name = item.querySelector('.hobby-name').value;

        if (name) {
            const hobbyDiv = document.createElement('div');
            hobbyDiv.className = 'cv-item';
            hobbyDiv.innerHTML = `<p>${name}</p>`;
            previewHobbies.appendChild(hobbyDiv);
        }
    });
}


document.getElementById('generateCV').addEventListener('click', () => {
    window.print();
});