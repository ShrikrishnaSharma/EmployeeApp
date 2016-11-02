package com.EmployeeApp.model;



public class EmployeeJson {
	
	int id;
	String name, description, address, city, state, country;
	double salary;
	String startDate, endDate;
	//List<String> departmentList=new ArrayList<>();
	int type;
	
	
	
	public EmployeeJson() {
		super();
	}



	public EmployeeJson(int id, String name, String description, String address, String city, String state,
			String country, double salary, String startDate, String endDate,  int type) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.address = address;
		this.city = city;
		this.state = state;
		this.country = country;
		this.salary = salary;
		this.startDate = startDate;
		this.endDate = endDate;
		//this.departmentList = departmentList;
		this.type = type;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	public String getCountry() {
		return country;
	}



	public void setCountry(String country) {
		this.country = country;
	}



	public double getSalary() {
		return salary;
	}



	public void setSalary(double salary) {
		this.salary = salary;
	}



	public String getStartDate() {
		return startDate;
	}



	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}



	public String getEndDate() {
		return endDate;
	}



	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}



	/*public List<String> getDepartmentList() {
		return departmentList;
	}



	public void setDepartmentList(List<String> departmentList) {
		this.departmentList = departmentList;
	}
*/


	public int getType() {
		return type;
	}



	public void setType(int type) {
		this.type = type;
	}



	/*@Override
	public String toString() {
		return "EmployeeVO [id=" + id + ", name=" + name + ", description=" + description + ", address=" + address
				+ ", city=" + city + ", state=" + state + ", country=" + country + ", salary=" + salary + ", startDate="
				+ startDate + ", endDate=" + endDate + ", departmentList=" + departmentList + ", type=" + type
				+ "]";
	}*/
	

}
