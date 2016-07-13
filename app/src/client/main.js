import { connect } from 'react-redux';
import { App } from 'doca-cf-theme';
import config from '../../config';

// this dynamically imports css, less and sass from the "THEME/styles"
try {
var reqCSS = require.context('doca-cf-theme/styles', true, /\.css$/ig);
reqCSS.keys().forEach(reqCSS);
var reqLESS = require.context('doca-cf-theme/styles', true, /\.less$/ig);
reqLESS.keys().forEach(reqLESS);
var reqSASS = require.context('doca-cf-theme/styles', true, /\.scss$/ig);
reqSASS.keys().forEach(reqSASS);
} catch (e) {}

const mapStateToProps = state => ({
  schemas: state.schemas,
  config,
});

const Main = connect(
  mapStateToProps
)(App);

export default Main;
