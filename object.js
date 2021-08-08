const bioData = { Name: 'Tasnim', Location: 'Savar', District: 'Rangpur' };

bioData.Birthday = 'Novembar';
bioData.School = 'Radio Coloni Model School';
// delete the perameter

bioData.Clg = "CFM";
delete bioData.Clg;

bioData.University = "DIU";


// update the value of the paremeter

bioData.University = 'JNU';
console.log(bioData);