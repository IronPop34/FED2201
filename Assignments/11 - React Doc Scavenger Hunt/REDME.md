What Is React?  

	A library that helps create views for web and mobile applications.	
	
What is JSX?  
	
	JSX (JavaScript and XML) is a markup language that extends JavaScript and is used for writing components.
	
Explain the different types of components.  
	
	Class Components are JavaScript classes that manage state and extends the interface.
	Functional Components are JavaScript functions that return JSX and holds code that will render in JSX elements.
	Pure Components don't re-render every time a change is made and only render in set conditions. 
	
What are higher order components?  
	
	Components that act as a wrapper around other components and add extra functionality. 
	
What is context?  
	
	A way to share values between components without having to explicitly pass a prop through every level of the tree.
	
What is State and Props?  
	
	State displays the current state of a component. Props is an object property react implements in order to pass data to different components.
	
What Are Hooks?  
	
	Part of Functional Components, they change how functional components work and help maintain state and access lifecycle methods. They are needed to access methods like "constructor", "willUnmount", "getDerivedState", "didUpdate", "didMount", "getSnapshot", "getDerivedState", and "shouldUpdate".
	
What are some of the “Rules” of Hooks?  
	
	1) Can only be called inside React function components.
    2) Can only be called at the top level of a component.
    3) Cannot be conditional
	
What are error boundaries?  
	
	React components that catch JavaScript errors anywhere in the child component tree, log these errors, and display a fallback UI instead of the component tree that crashed.
	
What are Keys?

    A Key is used to uniquely identify an item, especially in the case of dynamic react component, it identifies dynamic components and it can be used to identify the change in an item like update, delete, etc.