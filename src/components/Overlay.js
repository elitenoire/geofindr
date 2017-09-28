/**
 * MIT License

  Copyright (c) 2017 Yeshwanth Dornala

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
 *
**/

/**
 * Tweaked code from https://github.com/ydornala/react-overlay-loading
 */ 

import React from 'react';
import Wave from 'respinner/lib/wave';
import styled from 'styled-components';

export default class WrapperComponent extends React.Component {
  render() {
    let isActive = 'none';
    // let color = null;

    if(this.props.active) isActive = 'block'

    // if (this.props.color) {
    //   color = this.props.color
    // }else {
    //   color = 'white';
    // };

    // const Hloader = Halogen[this.props.loader];

    const Wrapper = styled.div`
      position: relative;
    `;

    const LoaderWrapper = styled.div`
      &:before {
        content: '';
        background-color: ${ this.props.backgroundColor || 'black' };
        width: 100%;
        height: 100%;
        opacity: ${ this.props.opacity || .9};
        
        position: absolute;
        z-index: 99;
      }

      display: ${ isActive };
      
    `;

    const Loader = styled.div`
      position: absolute;
      text-align: center;
      color: white;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99;
    `;

    const Blurred = styled.div`
    ${this.props.active ? 'filter: blur(1px);' : ''}
    `;

    let textElement = null
    if (this.props.text) textElement = <div>{this.props.text}</div>

    return (
      <Wrapper>
        <LoaderWrapper>
          <Loader>
            <Wave stroke={this.props.color || 'white'} size={30} />
            {textElement}
          </Loader>
        </LoaderWrapper>
        <Blurred>
          {this.props.children}
        </Blurred>
      </Wrapper>
    );
  }
}