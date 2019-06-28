import * as Yup from 'yup';

// equalTo functioon to test equality with another field // two password fields in our case
function equalTo(ref, msg)
{
	return this.test({
		name: 'equalTo',
		exclusive: false,
        message: msg || '${path} must be the same as ${reference}',
		params: {
			reference: ref.path
		},
		test: function(value) {
            return value === this.resolve(ref);
        } 
	})
};
Yup.addMethod(Yup.string, 'equalTo', equalTo);

export default Yup;