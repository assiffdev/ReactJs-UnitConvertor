import React, { Component } from 'react';
import ReactDom  from 'react-dom';
import SelectInput from './SelectInput';
import BaseUnitList from './BaseUnitList.json';
import MassUnitList from './MassUnitList.json';
import LengthUnitList from './LengthUnitList.json';
import NumberInput from './NumberInput';
import './App.css';
import massConversion from './logics/MassConversion';
import lengthConversion from './logics/LengthConversion';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.changeHandlerleft = this.changeHandlerleft.bind(this);
    this.changeHandlerRight = this.changeHandlerRight.bind(this);
    this.handleChangeInputLeft= this.handleChangeInputLeft.bind(this);
    this.handleChangeInputRight = this.handleChangeInputRight.bind(this);
    this.state = {
      baseUnitOptions:BaseUnitList,
        leftUnitOptions:MassUnitList ,
        rightUnitOptions:MassUnitList,
        baseSelectValue:'mass',
        unitLeftSelectValue:'kilogram',
        unitRightSelectValue:'kilogram',
        leftInputValue:'1',
        rightInputValue:'1'
      };
  };
  
  handleChangeInputLeft(leftInputValue){
      this.setState({leftInputValue:leftInputValue},
       () => {
        const  direction = true;
             const leftInputNum =this.state.leftInputValue;
             if(leftInputNum !==""){
            const result= massConversion(this.state.unitLeftSelectValue,
              this.state.unitRightSelectValue,
               this.state.leftInputValue,
              direction);
              this.setState({rightInputValue:result});
              }  
           });
  };
  handleChangeInputRight(rightInputValue){
       this.setState({rightInputValue:rightInputValue},
      () => {
        const  direction =false;
        let result="";
        let baseValueSelected = this.state.baseSelectValue;
        const rightInputNum = this.state.rightInputValue;
        const leftSelectUnit = this.state.unitLeftSelectValue;
        const rightSelectUnit = this.state.unitRightSelectValue;
              if(rightInputNum !==''){
                    if(baseValueSelected==='mass'){
                    result= massConversion(leftSelectUnit, rightSelectUnit,
                    rightInputNum,direction);
                }
                    if(baseValueSelected==='length'){
                    result = lengthConversion(leftSelectUnit, rightSelectUnit,
                      rightInputNum);
                };
              this.setState({leftInputValue:result});
              };
           });
  };
  changeHandler(selectedValue){
            let result = "";
           
          if(selectedValue === 'mass'){
            const direction = false;
            this.setState({baseSelectValue:selectedValue,
              leftUnitOptions:MassUnitList,
               rightUnitOptions:MassUnitList,
               unitLeftSelectValue:MassUnitList[0].value,
               unitRightSelectValue:MassUnitList[0].value},() => {
                const leftInputNum = this.state.leftInputValue;
                 const leftSelectUnit = this.state.unitLeftSelectValue;
                 const rightSelectUnit = this.state.unitRightSelectValue;
                 result= massConversion(leftSelectUnit, rightSelectUnit,
                  leftInputNum,direction);
                  this.setState({rightInputValue:result});
               });
          };
          if(selectedValue==='length'){
            this.setState({baseSelectValue:selectedValue,
              leftUnitOptions:LengthUnitList,
               rightUnitOptions:LengthUnitList,
               unitLeftSelectValue:LengthUnitList[0].value,
               unitRightSelectValue:LengthUnitList[0].value,
               }, () =>{
                const leftInputNum = this.state.leftInputValue;
                const leftSelectUnit = this.state.unitLeftSelectValue;
                const rightSelectUnit = this.state.unitRightSelectValue;
                result= lengthConversion(leftSelectUnit, rightSelectUnit,
                  leftInputNum);
                  this.setState({rightInputValue:result});
               })};
  };
  changeHandlerleft(selectedValue){
        this.setState({unitLeftSelectValue:selectedValue},
        () => {
          const  direction =true;
          let result="";
          const baseValueSelected=this.state.baseSelectValue;
          const leftInputNum = this.state.leftInputValue;
         // const rightInputNum = this.state.rightInputValue;
          const leftSelectUnit = this.state.unitLeftSelectValue;
          const rightSelectUnit = this.state.unitRightSelectValue;
          if(baseValueSelected==='mass'){
            result= massConversion(leftSelectUnit, rightSelectUnit,
            leftInputNum,direction);
          }
          if(baseValueSelected==='length'){
            result = lengthConversion(leftSelectUnit, rightSelectUnit,
              leftInputNum);
          };
            this.setState({rightInputValue:result});
        });
       
  };
  changeHandlerRight(selectedValue){
        this.setState({unitRightSelectValue:selectedValue},
        () => {
          const  direction =true;
          let result="";
          const baseValueSelected=this.state.baseSelectValue;
          const leftInputNum = this.state.leftInputValue;
          //const rightInputNum = this.state.rightInputValue;
          const leftSelectUnit = this.state.unitLeftSelectValue;
          const rightSelectUnit = this.state.unitRightSelectValue;
          if(baseValueSelected==='mass'){
           result= massConversion(leftSelectUnit, rightSelectUnit, leftInputNum, direction);
          };
          if(baseValueSelected==='length'){
            result = lengthConversion(leftSelectUnit, rightSelectUnit, leftInputNum);
          }
            this.setState({rightInputValue:result});
        });
  };
  render() {
        let baseState = 'the base state is : '+ this.state.baseSelectValue;
        let leftState = 'the left state is : '+ this.state.unitLeftSelectValue;
        let rightState = 'the right state is : '+ this.state.unitRightSelectValue;
        let leftInput ='this leftinput state is '+this.state.leftInputValue;
        let rightInput ='this righttinput state is '+this.state.rightInputValue;
    return (
         <div className="container">
             <Header/>
             <div className="row">
              <div className="col-md-10">
             <SelectInput 
              selectValue={this.state.baseSelectValue}
              changeHandler={this.changeHandler}
              selectOptions={this.state.baseUnitOptions} />
              </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                <NumberInput
                 handleChange={this.handleChangeInputLeft}
                 inputValue={this.state.leftInputValue} />
                </div>
                
                <div className="col-md-5">
                <NumberInput
                 handleChange={this.handleChangeInputRight}
                 inputValue={this.state.rightInputValue}
                  />
                </div> 
              </div>
              <div className="row">
              <div className="col-md-5">
              <SelectInput 
              selectValue={this.state.unitSelectValueLeft}
              changeHandler={this.changeHandlerleft}
              selectOptions={this.state.leftUnitOptions} />
              </div>
              <div className="col-md-5">
              <SelectInput 
              selectValue={this.state.unitSelectValueRight}
              changeHandler={this.changeHandlerRight}
              selectOptions={this.state.rightUnitOptions} />
              </div>
              </div>
         </div>
    );
  }
}

export default App;
