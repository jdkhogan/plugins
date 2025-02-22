import { __ } from '@wordpress/i18n';
import { ColorPalette } from '@wordpress/block-editor';
import { ToggleControl, HorizontalRule, RangeControl } from '@wordpress/components';
import metadata from '../block.json';

export const TopCurveSettings = (props) => {

    return (
        <>
            <HorizontalRule />
            <RangeControl 
                label = {__('Width', metadata.textdomain)}
                min={ 100 }
                max={ 300 }
                value={ props.attributes.topWidth || 100 }
                onChange={ (newValue) => {
                    props.setAttributes({
                        topWidth: parseInt(newValue),
                    });
                }}
            />
            <RangeControl 
                label = {__('Height', metadata.textdomain)}
                min={ 0 }
                max={ 200 }
                value={ props.attributes.topHeight }
                onChange={ (newValue) => {
                    props.setAttributes({
                        topHeight: parseInt(newValue),
                    });
                }}
            />
            <HorizontalRule />
            <div style={{display: "flex"}}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        flipTopX: isChecked
                    });
                }} checked={props.attributes.flipTopX} />
                <span>{__('Flip horizontally', metadata.textdomain)}</span>	
            </div>
            <div style={{display: "flex"}}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        flipTopY: isChecked
                    });
                }} checked={props.attributes.flipTopY} />
                <span>{__('Flip vertically', metadata.textdomain)}</span>	
            </div>
            <div style={{display: "flex"}}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        overlapTopContent: isChecked
                    });
                }} checked={props.attributes.overlapTopContent} />
                <span>{__('Overlap content', metadata.textdomain)}</span>	
            </div>
            <HorizontalRule />
            <div>
                <label>{__('Curve color', metadata.textdomain)}</label>
                <ColorPalette 
                    value={ props.attributes.topColor } 
                    onChange={(newValue) => {
                        props.setAttributes({
                            topColor: newValue
                        })
                    }} 
                />
            </div>
        </>
    );
};
