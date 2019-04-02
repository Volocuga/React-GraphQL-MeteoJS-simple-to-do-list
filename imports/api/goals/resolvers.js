import Goal from "./goals";

export default {
  Mutation: {
    createGoal(obj, { name, resolutionId }, { userId }) {
      if (userId) {
        const goalId = Goal.insert({
          resolutionId,
          name,
          completed: false
        });
        return Goal.findOne(goalId);
      }
      throw new Error("Not autorizations");
    },

    toggleGoal(obj, { _id }) {
      const goal = Goal.findOne(_id);
      Goal.update({ _id }, { $set: { completed: !goal.completed } });
      return Goal.findOne(_id);
    }
  }
};
