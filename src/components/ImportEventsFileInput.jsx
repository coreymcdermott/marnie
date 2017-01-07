import React, { Component, PropTypes } from 'react';

const propTypes = {
  handleImport: PropTypes.func.isRequired,
};

class ImportEventsFileInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { handleImport } = this.props;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(data) {
      handleImport(data.target.result);
    };
    reader.readAsBinaryString(file);
  }

  render() {
    return (
      <label className="btn btn-default btn-file m-right hidden-print">
        Import Events <input type="file" onChange={this.onChange} className="hidden-input" />
      </label>
    );
  }
}

ImportEventsFileInput.propTypes = propTypes;

export default ImportEventsFileInput;
