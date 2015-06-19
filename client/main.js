Meteor.subscribe('projects');

Meteor.startup(function() {
	Session.set('background', 'url("/squared_metal.png")');
});

Template.Portfolio.helpers({
	projects: function() {
		return Projects.find();
	}
});

Template.Layout.events({
	'click marquee': function() {
		var state;
		Tracker.nonreactive(function() {
			state = Session.get('showLogin');
		});
		Session.set('showLogin', !state);
	}
});

Template.Layout.helpers({
	showLogin: function() {
		return Session.get('showLogin');
	}
});

