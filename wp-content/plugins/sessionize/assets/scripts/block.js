( function( blocks, element, components ) {
 
    var el = element.createElement,
    registerBlockType = blocks.registerBlockType,
    ServerSideRender = components.ServerSideRender,
	InspectorControls = wp.editor.InspectorControls,
  	PanelBody = wp.components.PanelBody,
  	withState = wp.compose.withState,
  	SelectControl = wp.components.SelectControl,
  	TextControl = wp.components.TextControl;


	var sessionizeIcon = element.createElement('svg', 
		{ 
			width: 30, 
			height: 30 
		},
		element.createElement( 'path',
			{ 
				d: "M18.5021703,1.81700905 C18.6536267,1.66626121 18.6536267,1.42185068 18.5021703,1.27110284 C18.3507139,1.120355 18.1051546,1.120355 17.9536981,1.27110284 L14.4632427,4.74522871 C14.3117862,4.89597655 14.3117862,5.14038709 14.4632427,5.29113493 C14.6146991,5.44188276 14.8602584,5.44188276 15.0117148,5.29113493 L18.5021703,1.81700905 Z"
			}
		),
		element.createElement( 'path',
			{ 
				d: "M12.3377322,1.0022497 C12.4003557,0.798375439 12.2850726,0.582573744 12.0802401,0.520243126 C11.8754075,0.457912508 11.6585915,0.572656305 11.5959679,0.77653057 L10.9545369,2.86474141 C10.8919133,3.06861567 11.0071965,3.28441737 11.212029,3.34674798 C11.4168616,3.4090786 11.6336776,3.2943348 11.6963012,3.09046054 L12.3377322,1.0022497 Z"
			}
		),
		element.createElement( 'path',
			{ 
				d: "M18.9990672,8.14499554 C19.2038998,8.08266492 19.3191829,7.86686323 19.2565593,7.66298896 C19.1939357,7.4591147 18.9771197,7.3443709 18.7722871,7.40670152 L16.674261,8.04513164 C16.4694284,8.10746226 16.3541453,8.32326395 16.4167689,8.52713822 C16.4793925,8.73101248 16.6962085,8.84575628 16.9010411,8.78342566 L18.9990672,8.14499554 Z"
			}
		),
		element.createElement( 'path',
			{ 
				d: "M15.4671358,0.712678474 C15.5774527,0.529939287 15.5180465,0.292788788 15.3344484,0.182988007 C15.1508502,0.0731872264 14.9125851,0.132315487 14.8022682,0.315054673 L12.8248798,3.59058537 C12.714563,3.77332455 12.7739691,4.01047505 12.9575673,4.12027583 C13.1411654,4.23007661 13.3794306,4.17094835 13.4897475,3.98820917 L15.4671358,0.712678474 Z"
			}
		),
		element.createElement( 'path',
			{ 
				d: "M19.4627122,4.95369549 C19.6463104,4.84389471 19.7057165,4.60674421 19.5953997,4.42400502 C19.4850828,4.24126584 19.2468176,4.18213758 19.0632195,4.29193836 L15.7722926,6.26007576 C15.5886945,6.36987654 15.5292883,6.60702704 15.6396052,6.78976622 C15.7499221,6.97250541 15.9881873,7.03163367 16.1717854,6.92183289 L19.4627122,4.95369549 Z"
			}
		),
		element.createElement( 'path',
			{ 
				d: "M8.92005292,19.6867133 C14.0671979,19.6867133 17.8401058,16.16616 17.8401058,10.8083916 L17.8401058,10.2382362 L17.3082416,10.4499866 C17.2674688,10.4662195 17.2674688,10.4662195 17.2339624,10.4795593 C17.1499945,10.5129893 17.1499945,10.5129893 17.0240427,10.5631343 C16.7140076,10.6865682 16.7140076,10.6865682 16.2747911,10.8614329 C15.2413407,11.2728791 15.2413407,11.2728791 14.0012001,11.7666146 L11.7276091,12.6717963 C10.9008487,13.0009533 10.9008487,13.0009533 10.6941586,13.0832426 L10.3045938,13.2383395 L10.4905255,13.6127073 L11.6750111,15.9976331 L11.8102138,15.5036395 L10.6257279,16.2756675 L11.1442978,16.361574 L9.26235879,13.9538741 L9.08316898,13.7246237 L8.81221926,13.8324966 L5.67338997,15.0821545 L6.0916619,15.1676063 L4.54034835,13.6235504 L4.62620188,14.0398655 L9.28014254,2.45944591 L9.49288823,1.93006993 L8.92005292,1.93006993 C3.79460443,1.93006993 2.95778202e-10,5.82875576 0,10.8083916 C-2.87802514e-10,15.6537491 4.05192056,19.6867133 8.92005292,19.6867133 Z M8.92005292,2.7020979 L8.5599633,2.17272192 L3.90602265,13.7531415 L3.81104596,13.9894724 L3.99187618,14.1694566 L5.54318973,15.7135125 L5.72401995,15.8934968 L5.96146166,15.7989644 L9.10029096,14.5493065 L8.65015144,14.427929 L10.5320904,16.8356288 L10.7515972,17.1164596 L11.0506603,16.9215353 L12.2351462,16.1495073 L12.5226312,15.9621294 L12.370349,15.6555137 L11.1858634,13.2705879 L10.9822303,13.8000526 C11.1889204,13.7177633 11.1889204,13.7177633 12.0156808,13.3886063 C13.0491312,12.9771601 13.0491312,12.9771601 14.2892718,12.4834246 C15.5294124,11.9896891 15.5294124,11.9896891 16.5628628,11.5782428 C17.0020793,11.4033782 17.0020793,11.4033782 17.3121144,11.2799443 C17.4380662,11.2297993 17.4380662,11.2297993 17.522034,11.1963693 C17.5555404,11.1830294 17.5555404,11.1830294 17.5773398,11.1743505 C17.5962723,11.1668129 17.0644491,10.8083916 17.0644491,10.8083916 C17.0644491,15.7282456 13.6496042,18.9146853 8.92005292,18.9146853 C4.48030397,18.9146853 0.775656775,15.2273698 0.775656776,10.8083916 C0.775656776,6.24974639 4.22859534,2.7020979 8.92005292,2.7020979 Z"
			}
		),
		element.createElement( 'path',
			{ 
				d: "M5.01082017,20.8569841 C5.09052711,20.88424 5.18203432,20.9145027 5.28412757,20.9470197 C5.57489736,21.0396307 5.8932382,21.1321421 6.22954079,21.2185238 C6.85620586,21.3794873 7.47215044,21.5004982 8.05308016,21.5651933 C8.35704197,21.5990439 8.64666098,21.6167832 8.92005292,21.6167832 C9.19344486,21.6167832 9.48306387,21.5990439 9.78702568,21.5651933 C10.3679554,21.5004982 10.9839,21.3794873 11.6105651,21.2185238 C11.9468676,21.1321421 12.2652085,21.0396307 12.5559783,20.9470197 C12.6580715,20.9145027 12.7495787,20.88424 12.8292857,20.8569841 C12.8778155,20.8403893 12.9120848,20.8283153 12.9308745,20.8215147 C13.1321704,20.7486586 13.2360139,20.5271779 13.1628154,20.3268237 C13.0896168,20.1264694 12.8670951,20.0231118 12.6657991,20.0959679 C12.6037021,20.118443 12.4849745,20.159042 12.3195769,20.2117216 C12.0422387,20.3000546 11.7379332,20.3884873 11.4167455,20.4709867 C10.8229129,20.6235168 10.2415951,20.7377249 9.7007771,20.7979529 C9.42414375,20.8287601 9.16300055,20.8447552 8.92005292,20.8447552 C8.67710529,20.8447552 8.41596209,20.8287601 8.13932874,20.7979529 C7.59851075,20.7377249 7.01719295,20.6235168 6.42336037,20.4709867 C6.10217264,20.3884873 5.79786713,20.3000546 5.52052892,20.2117216 C5.35513132,20.159042 5.23640375,20.118443 5.1743067,20.0959679 C4.97301075,20.0231118 4.750489,20.1264694 4.67729047,20.3268237 C4.60409194,20.5271779 4.70793543,20.7486586 4.90923138,20.8215147 C4.92802106,20.8283153 4.96229034,20.8403893 5.01082017,20.8569841 Z"
			}
		),
		element.createElement( 'path',
			{ 
				d: "M6.30924364,23.2075522 C6.48425195,23.2550584 6.68377212,23.302341 6.90485158,23.34635 C7.53456252,23.471703 8.21409286,23.5468531 8.92005292,23.5468531 C9.62601298,23.5468531 10.3055433,23.471703 10.9352543,23.34635 C11.1563337,23.302341 11.3558539,23.2550584 11.5308622,23.2075522 C11.6379599,23.1784804 11.7144949,23.1552961 11.7574937,23.1410302 C11.9606938,23.0736137 12.0705113,22.8550063 12.0027779,22.6527568 C11.9350446,22.4505074 11.7154096,22.3412037 11.5122095,22.4086202 C11.4824906,22.4184801 11.4196497,22.4375161 11.3267734,22.4627275 C11.1684917,22.5056933 10.9862433,22.5488828 10.7831355,22.5893143 C10.2008827,22.7052201 9.57149221,22.7748252 8.92005292,22.7748252 C8.26861363,22.7748252 7.63922316,22.7052201 7.05697039,22.5893143 C6.85386254,22.5488828 6.67161414,22.5056933 6.51333244,22.4627275 C6.42045616,22.4375161 6.35761529,22.4184801 6.32789631,22.4086202 C6.12469622,22.3412037 5.90506126,22.4505074 5.83732789,22.6527568 C5.76959453,22.8550063 5.87941201,23.0736137 6.0826121,23.1410302 C6.12561095,23.1552961 6.2021459,23.1784804 6.30924364,23.2075522 Z"
			}
		)
	);

  	function validateField(value){
		if( value == '' || value == null ){
			wp.data.dispatch( 'core/editor' ).lockPostSaving( 'sessionize_block_lock' );
			wp.data.dispatch( 'core/notices' ).removeNotice('sessionize_block_notice');
			wp.data.dispatch( 'core/notices' ).createErrorNotice( sessionize_g_block_object.event_id_error_msg, { id: 'sessionize_block_notice',isDismissible: true} ) 
		}else{
			wp.data.dispatch( 'core/editor' ).unlockPostSaving( 'sessionize_block_lock' );
			wp.data.dispatch( 'core/notices' ).removeNotice('sessionize_block_notice');
		}
  	}
 
    registerBlockType( 'sessionize/embed-block', {
        title: sessionize_g_block_object.button_title,
        icon: sessionizeIcon,
        category: 'embed',
		attributes: {
			embed_id: {
			  type: 'string',
			  default: null
			},
			embed_type: {
			  type: 'string',
			  default: ''
			}
		},
        edit: function( props ) {
			var attributes = props.attributes;
			var setAttributes = props.setAttributes;
			var setState = props.setState;
			var status = props.status;
			var embed_id = attributes.embed_id;
			var embed_type = attributes.embed_type;

			validateField(embed_id);

			var inspectorControl = el(InspectorControls, {},
				el(TextControl, {
					id: "sessionize-embed-id",
					label: sessionize_g_block_object.event_id_title,
					value: embed_id,
					onChange: function(value) {
						validateField(value);
						setAttributes({embed_id: value});
					}
				}),
				el(SelectControl, {
					label: sessionize_g_block_object.embed_type_title_block,
					value: embed_type,
					onChange: function(value) {
						setAttributes({embed_type: value});
					},
					options: sessionize_g_block_object.embed_types,
				}),
			);

			return el('div', {
					className: 'sessionize-block',
				},
                el(DelayedServerSideRender, {
                    block: "sessionize/embed-block",
                    attributes: props.attributes,
                    delay: 1000
                } ),
				inspectorControl
			);
        },
		save: function( props ) {
		    return null;
		}
    } );

	DelayedServerSideRender.prototype = Object.create(React.Component.prototype);
	function DelayedServerSideRender(props) {
	  React.Component.constructor.call(this);
	  var self = this;
	  self.state = {
	    attributes: props.attributes
	  };
	  self.componentWillReceiveProps = function(nextProps) {
	    if(self.timeout){
	      clearInterval(self.timeout);
	    }
	    self.timeout = setTimeout(function(){
	      self.setState(function(prevState) {
	        return { attributes: nextProps.attributes };
	      });
	    }, props.delay);
	  };
	  self.componentWillUnmount = function() {
		clearInterval(self.timeout);
	    validateField(true);
	  };
	  self.render = function() {
	    return el(ServerSideRender, {
	      block: self.props.block,
	      attributes:  self.state.attributes
	    });
	  }
	}
}(
    window.wp.blocks,
    window.wp.element,
    window.wp.components,
) );