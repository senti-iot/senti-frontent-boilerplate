import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import typographyStyle from 'assets/jss/typographyStyle';

function Muted({ ...props }) {
	const { classes, children, className } = props;
	return (
		<div className={classes.defaultFontStyle + ' ' + classes.mutedText + ' ' + className}>
			{children}
		</div>
	);
}

Muted.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Muted);
