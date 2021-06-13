type Callback<T> = (data: T) => void;

class PubSub {
	private events: Record<string, Callback<any>[]> = {};

	subscribe<T>(eventName: string, callback: Callback<T>) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(callback);
	}

	unsubscribe(eventName: string, callback: Callback<unknown>) {
		if (this.events[eventName]) {
			for (let i = 0; i < this.events[eventName].length; i += 1) {
				if (this.events[eventName][i] === callback) {
					this.events[eventName].splice(i, 1);
					break;
				}
			}
		}
	}

	publish<T>(eventName: string, data?: T) {
		if (this.events[eventName]) {
			this.events[eventName].forEach((callback) => {
				callback(data);
			});
		}
	}
}

const pubSub = new PubSub();

export default pubSub;
