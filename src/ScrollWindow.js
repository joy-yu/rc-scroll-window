import React, { Component } from 'react';
import './ScrollWindow.css';


export default class ScrollWindow extends Component {
  static defaultProps = {
    width: '100%',
    height: '100%',
    duration: 4000,
  };
  static propTypes = {
    width: React.PropTypes.string,
    height: React.PropTypes.string,
    duration: React.PropTypes.number,
    source: React.PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.timer = null;
    this.state={
      nIndex: 0
    };
  }

  handleBarClick = (i, e) => {
    let scrollList = this.refs['scrollList'].refs['scroll-list'];
    this.setState({
      nIndex: i
    });
    scrollList.style.marginLeft = -i * 100 + '%';
  }


  componentDidMount() {
    let scrollMove = ()=> {
      this.state.nIndex >= 4 ? this.setState({nIndex: 0}) : this.setState({nIndex: this.state.nIndex + 1});
      this.handleBarClick(this.state.nIndex);
    };
    this.timer = setInterval(scrollMove, this.props.duration);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  render() {
    if (!this.props.source) {
      throw new Error('请为组件设置source属性：source={arrName}');
    }

    const size = {
      width: this.props.width,
      height: this.props.height,
      totalLen: this.props.source.length,
    };


    return (
      <div className="scroll-wrapper" style={{width:size.width, height:size.height}}>
        <ScrollList
          {...size}
          source={this.props.source}
          ref="scrollList" />
        <SelectBar
          source={this.props.source}
          handleBarClick={this.handleBarClick}
          nIndex={this.state.nIndex} />
      </div>
    );
  }
}

class ScrollList extends Component {

  renderImg(str){
    if(str.indexOf('http')>-1){
      return(<img src={str} alt="滚动图"/>);
    } else{
      return(<img src={require(str)} alt="滚动图"/>);
    }
  }

  render(){
    return(
      <ul className="scroll-list clearfix" style={{width:this.props.totalLen+'00%'}} ref="scroll-list">{
        this.props.source.map((v,i)=>{
          return(
            <li key={`sl-${i}`} style={{width: 100/this.props.totalLen+'%'}}>
              <a target="_blank" href={v.href}>
                {this.renderImg(v.image)}
              </a>
            </li>
          );
        })
      }</ul>
    );
  }
}

class SelectBar extends Component {
  render() {
    return (
      <ul className="select-bar">{
        this.props.source.map((v,i)=>{
          return(
            <li
              onClick={this.props.handleBarClick.bind(null, i)}
              className={this.props.nIndex===i?'on':''}
              key={`chli${i}`} />
          );
        })
      }</ul>
    );
  }
}

