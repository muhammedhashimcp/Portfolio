import React from 'react';
import { Firebase } from '../firebase/Config';

const Proj = () => {
	return (
		<div>
			<button
				onClick={() => {
					Firebase.firestore()
						.collection('projects')
						.get()
						.then((snapShot) => {
							snapShot.forEach((obj) => {
								console.log(
									'🚀 ~ file: Proj.jsx ~ line 12 ~ snapShot.forEach ~ obj.data()',
									obj.data(),
									obj.id
								);
							});
						});
				}}
			>
				Click me{' '}
			</button>
			<button
				onClick={() => {
					Firebase.firestore()
						.collection('projects')
						.add({
							title: 'redux',
							liveLink: 'hello',
							id: 123,
							category: 'mern',
						})
						.then(() => {
							console.log('inserted successfully');
						});
				}}
			>
				Upload{' '}
			</button>
			{/* update */}
			<button
				onClick={() => {
					Firebase.firestore()
						.collection('projects')
						.doc('SM6YycGyFIsEoHqdM5yS')
						.set({
							title: 'node js',		
						})
						.then(() => {
							console.log('Updated successfully');
						});
				}}
			>
				Update{' '}
			</button>

			<button
				onClick={() => {
					Firebase.firestore()
						.collection('projects')
						.doc('Se5INgz7dA51i7BNRUWJ')
						.delete()
						.then(() => {
							console.log('Deleted successfully');
						});
				}}
			>
				delete{' '}
			</button>
		</div>
	);
};

export default Proj;
