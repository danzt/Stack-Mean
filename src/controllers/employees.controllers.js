const  employeeCtrl = {}

employeeCtrl.getEmployees = (req, res) => {
    res.send('get employees')
}
employeeCtrl.createEmployee = (req, res) => {
    res.send('Create employees')
}
employeeCtrl.getEmployee = (req, res) => {}
employeeCtrl.editEmployee = (req, res) => {}
employeeCtrl.deleteEmployee = (req, res) => {}

module.exports = employeeCtrl;