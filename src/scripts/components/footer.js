import { h } from 'preact';

import '../../styles/components/footer.scss';

export default (props) => {

    return (
        <div class="at-footer">
            <div class="at-footer__copyright content-wrapper">
                <p>© 2022 Axie Tracker | v0.0.1</p>
                <p>Powered by <a href="https://preactjs.com/" rel="noopener noreferrer" target="_blank">Preact</a> and <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">Github Pages</a></p>
            </div>
        </div>
    );
    
};